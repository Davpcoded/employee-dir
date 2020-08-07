import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <img
            alt={user.title}
            className="img-fluid"
            src={user.images.original.url}
          />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
