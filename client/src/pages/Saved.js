import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Book from "../components/Book";
import Card from "../components/Card";

class Saved extends Component {
  state = {
    books: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks() {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data })
      ).catch(err => console.log(err));
    // API.getBook(this.props.match.params.id)
    //   .then(res => this.setState({ book: res.data }))
    //   .catch(err => console.log(err));
  }

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
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
            
          </Col>
          <Col size="md-12">
            <h1>Results</h1>
            <Card title="Books">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book 
                      key={book._id}
                      title={book.title}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
