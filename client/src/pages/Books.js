import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

// import Card from "../components/Card";
// import Form from "../components/Form";
// import Book from "../components/Book";

class Books extends Component {
  state = {
    books: [],
    query: ""
  };

  // Don't need to do this since we're not initially loading anything
  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    API.getBooks(this.state.query)
      .then(res =>
        // this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
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
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Harry Potter"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
