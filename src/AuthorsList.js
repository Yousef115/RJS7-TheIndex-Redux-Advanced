import React from 'react';

import AuthorCard from './AuthorCard';

function AuthorsList(props) {

  const authors = props.authors.map(author => <AuthorCard {...author} />);

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">
        {authors}
      </div>
    </div>
  );
}

export default AuthorsList;
