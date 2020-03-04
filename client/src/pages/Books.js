import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";
// import Form from "../components/Form";
import Book from "../components/Book";
import Form from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    query: "",
    message: "Enter a Title"
  };

  // Don't need to do this since we're not initially loading anything
  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    console.log(`loadBooks(): query = ${this.state.query}`);
    API.getBooks(this.state.query)
      .then(res => {
        // this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        console.log("res = " + JSON.stringify(res))
        this.setState({ books: res.data })}
      ).catch(err => console.log(err));
  };

  // Don't need this since we're not deleting anything
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit()");
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
    this.loadBooks();
  };

  handleSaveBook = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      id: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.loadBooks());

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <p>Search for and Save Books of Interest</p>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            {/* <Form btnName="Search" cb={this.handleFormSubmit}>Test Book Search</Form> */}
            <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                query={this.state.query}
              />
          </Col>
          <Col size="md-12">
            <h1>Results</h1>
            <Card title="Books">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book 
                      key={book._id}
                      title={book.volumeInfo.title}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleSaveBook(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h3>{this.state.message}</h3>
                )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
