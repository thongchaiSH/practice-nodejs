import React, { Component } from "react";
// Custom
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/student/edit-student/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno,
        });
      });
  }

  onChangeStudentName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeStudentEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangeStudentRollNo = (e) => {
    this.setState({ rollno: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
    };
    axios
      .put("http://localhost:4000/student/update-student/"+this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data);
        console.log("Sucdent successfully.");
        //Redirect to student list
        this.props.history.push('/student-list')
      }).catch(err=>{
          console.log(err);
      });

    

    // console.log("Student successfullt created!");
    // console.log(`Name : ${this.state.name}`);
    // console.log(`Email : ${this.state.email}`);
    // console.log(`Roll No : ${this.state.rollno}`);

    this.setState({
      name: "",
      email: "",
      rollno: "",
    });
  };

  render() {
    return (
        <div className="form-wrapper mt-5">
          <h1>Update Student</h1>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={this.onChangeStudentName}
              />
            </Form.Group>
  
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={this.state.email}
                onChange={this.onChangeStudentEmail}
              />
            </Form.Group>
  
            <Form.Group controlId="Roll">
              <Form.Label>Roll No.</Form.Label>
              <Form.Control
                type="text"
                value={this.state.rollno}
                onChange={this.onChangeStudentRollNo}
              />
            </Form.Group>
  
            <Button variant="success" size="lg" block="block" type="submit">
              Update Student
            </Button>
          </Form>
        </div>
      );
  }
}
