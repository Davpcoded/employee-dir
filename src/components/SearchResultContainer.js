import React, { Component } from "react";
import SearchForm from "./SearchForm";

class SearchResultContainer extends Component {
  state = {
    search: "",
    users: [],
    error: null,
  };

  getUsers = (data) => {
    console.log(data.results);
    this.setState({ users: data.results });
    console.log(this.state);
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=30&nat=u")
      .then((res) => res.json())
      .then(this.getUsers)
      .catch();
  }
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <table style={{ width: "100%" }}>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Phone</th>
          <th>DoB</th>
          <th>Email</th>
        </tr>
        {this.state.users.length > 0 &&
          this.state.users.map((user) => (
            <tr>
              <th>
                <img src={user.picture.thumbnail} alt="EmployeeImage" />
              </th>
              <th>
                {user.name.first} {user.name.last}
              </th>
              <th>{user.cell}</th>
              <th>{user.dob.date}</th>
              <th>{user.email}</th> 
            </tr>
          ))}
      </table>
    );
  }
}

export default SearchResultContainer;
