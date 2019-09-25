import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  state = {
    filteredAuthors: this.props.authors
  };

  filterAuthors = query => {
    query = query.toLowerCase();
    let filteredAuthors = this.props.authors.filter(author => {
      return `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query);
    });
    this.setState({ filteredAuthors });
  };

  render() {
    console.log(this.props.authors);
    const authorCards = this.state.filteredAuthors.map(author => (
      <AuthorCard key={author.id} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar changeHandler={this.filterAuthors} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

export default connect(mapStateToProps)(AuthorsList);
