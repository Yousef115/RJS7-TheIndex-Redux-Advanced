import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAuthors } from "./redux/actions";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  getView = () => {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
        </Switch>
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthors: authors => dispatch(fetchAuthors(authors))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
