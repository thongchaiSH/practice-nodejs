import React, { Component } from "react";
// Custom
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default class StudentTableRow extends Component {
  deleteStudent = () => {
    axios
      .delete(
        "http://localhost:4000/student/delete-student/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Student deleted successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link
            className="edit-link btn btn-primary"
            to={"/edit-student/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteStudent} variant="danger">Delete</Button>
        </td>
      </tr>
    );
  }
}
