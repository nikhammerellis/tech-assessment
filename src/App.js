import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchBooks } from "./actions";
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  renderAlert = () => {
    alert("The endpoint only returns 10 books, so this button is not functional!");
  }

  render() {
    if(this.props.booksLoading) {
      return (
        <h3>Loading...</h3>
      );
    };

    return (
      <div className="container-fluid" style={{ paddingRight: "0px", paddingLeft: "0px" }}>

        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand custom-brand" href="/">Assemble Books</a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="books-title">Books</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 move-right">
            <p className="section-header">Titles A-M</p>
            <div className="row">
            {this.props.titlesAtoM.map((book, i) => {
              return (
                <div className="col-md-2 book-card" key={book.id}>
                {/*
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="book-cover"/>
                  */}
                  <div style={{
                    backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}
                    className="book-cover"
                  />
                  <div className="metadata-container">
                    <p className="book-title">{book.volumeInfo.title}</p>
                    <p className="book-author">By {book.volumeInfo.authors[0]}</p>
                  </div>
                </div>
              );
            })}
            </div>
            <button onClick={() => this.renderAlert()} className="show-button">SHOW MORE</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 move-right">
            <p className="section-header">Titles N-Z</p>
            <div className="row">
            {this.props.titlesNtoZ.map((book, i) => {
              return (
                <div className="col-md-2 book-card" key={book.id}>
                {/*
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="book-cover"/>
                  */}
                  <div style={{
                    backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}
                    className="book-cover"
                  />
                  <div className="metadata-container">
                    <p className="book-title">{book.volumeInfo.title}</p>
                    <p className="book-author">By {book.volumeInfo.authors[0]}</p>
                  </div>
                </div>
              );
            })}
            </div>
            <button onClick={() => this.renderAlert()} className="show-button">SHOW MORE</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 footer">
            <p className="footer-text">Assemble Books</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { booksLoading, books, error } = state.books;

  const titlesAtoM = [];
  const titlesNtoZ = [];

  //split books based on title alphabetically
  books && books.map((book, i) => {
    if(book.volumeInfo.title[0].match(/[a-m]/i)) {
      titlesAtoM.push(book);
    } else {
      titlesNtoZ.push(book);
    };
  });

  return { booksLoading, error, titlesAtoM, titlesNtoZ };
}

export default connect(mapStateToProps, { fetchBooks })(App);
