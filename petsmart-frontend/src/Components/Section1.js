import React from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Section2 from './Section2'
import ExpenseDataStore from '../Data/ExpenseDataStore'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const divStyle = {
  margin: '40px'
};
class Section1 extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    ExpenseDataStore.data.section1 = this.state
    console.log(ExpenseDataStore.data);
  }

  render() {
    return (
      <div style={divStyle}>
        <h2>Information</h2>
        <Form.Group controlId="formEmployeeName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(event) => { this.setState({name : event.target.value}) }}/>
        </Form.Group>

        <Form.Group controlId="formEmployeeId">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control type="text" placeholder="123456" readonly="readonly" onChange={(event) => { this.setState({employeeId : event.target.value}) }}/>
        </Form.Group>
        <h2>Address</h2>
        <Form.Group controlId="formAddress1">
          <Form.Control type="text" placeholder="Address Line 1" onChange={(event) => { this.setState({address1 : event.target.value}) }}/>
        </Form.Group>

        <Form.Group controlId="formAddress2">
          <Form.Control type="text" placeholder="Address Line 2" onChange={(event) => { this.setState({address2 : event.target.value}) }}/>
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Control type="text" placeholder="City" onChange={(event) => { this.setState({city : event.target.value}) }}/>
        </Form.Group>

        <select id="country" onChange={(event) => { this.setState({country : event.target.value}) }}>
          <option value="USA">USA</option>
          <option value="CA">Canada</option>
        </select>


        <Form.Group controlId="forZipCode">
          <Form.Control type="text" placeholder="ZipCode" onChange={(event) => { this.setState({zipCode : event.target.value}) }}/>
        </Form.Group>

        <h2>Reason for Reimbursement Request</h2>
        <select>
          <option value="Reason">Reason</option>
        </select>

        <Form.Group controlId="formReasona">
          <Form.Control type="text" placeholder="Reason Details" onChange={(event) => { this.setState({reasonDetails : event.target.value}) }} />
        </Form.Group>


        <Link to="/section2">
          <Button onClick={this.handleClick}>Next</Button>
        </Link>

      </div>
    );
  }
}

export default Section1;