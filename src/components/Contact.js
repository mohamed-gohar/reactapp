import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      telNum: "",
      email: "",
      contactType: "tel.",
      agree: false,
      message: "",
      touched: {
        fName: false,
        lName: false,
        telNum: false,
        email: false,
      },
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`the state is ${JSON.stringify(this.state)}`);
    this.setState({
      fName: "",
      lName: "",
      telNum: "",
      email: "",
      contactType: "tel.",
      agree: false,
      message: "",
    });
  };
  handleBlur = (field) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validate(fName, lName, telNum, email) {
    const errors = {
      fName: "",
      lName: "",
      telNum: "",
      email: "",
    };
    if (this.state.touched.fName && fName.length < 3)
      errors.fName = "First Name is required and should be >= 3 characters";
    else if (this.state.touched.fName && fName.length > 10)
      errors.fName = "First Name should be <= 10 characters";

    if (this.state.touched.lName && lName.length < 3)
      errors.lName = "First Name is required and should be >= 3 characters";
    else if (this.state.touched.lName && lName.length > 10)
      errors.lName = "First Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telNum && !reg.test(telNum))
      errors.telNum =
        "Tel. Numbere is required and should contain only numbers";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Emaile is required and should contain a @";

    return errors;
  }
  render() {
    const errors = this.validate(
      this.state.fName,
      this.state.lName,
      this.state.telNum,
      this.state.email
    );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h2>Contact</h2>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 text-center mb-3">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h6>Our Address</h6>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h6>Map of our Location</h6>
          </div>
          <div className="col-12 text-center">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 text-center mb-3">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9 mx-auto">
            <Form onSubmit={this.handleSubmit} autoComplete="off">
              <FormGroup row>
                <Label for="fname" md={3}>
                  First Name:
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    name="fName"
                    id="fname"
                    placeholder="First Name"
                    value={this.state.fName}
                    onBlur={() => this.handleBlur("fName")}
                    invalid={errors.fName !== ""}
                    required
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.fName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="lname" md={3}>
                  Last Name:
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    name="lName"
                    id="lname"
                    placeholder="Last Name"
                    value={this.state.lName}
                    onBlur={() => this.handleBlur("lName")}
                    invalid={errors.lName !== ""}
                    required
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.lName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="tel" md={3}>
                  Phone Num:
                </Label>
                <Col md={9}>
                  <Input
                    type="tel"
                    name="telNum"
                    id="tel"
                    placeholder="phone num like 01143587388"
                    value={this.state.telNum}
                    onBlur={() => this.handleBlur("telNum")}
                    invalid={errors.telNum !== ""}
                    required
                    onChange={this.handleChange}
                    pattern="^[0][1]\d{9}$"
                  />
                  <FormFeedback>{errors.telNum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="email" md={3}>
                  Email:
                </Label>
                <Col md={9}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onBlur={() => this.handleBlur("email")}
                    invalid={errors.email !== ""}
                    required
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 3 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleChange}
                      />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Input
                      type="select"
                      name="contactType"
                      value={this.state.contactType}
                      onChange={this.handleChange}
                    >
                      <option>tel.</option>
                      <option>email</option>
                    </Input>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="message" md={3}>
                  message:
                </Label>
                <Col md={9}>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="message"
                    rows="8"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 9, offset: 3 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
