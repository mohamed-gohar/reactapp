import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };
    this.username = React.createRef(null);
    this.password = React.createRef(null);
    this.remember = React.createRef(null);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  toggleModal = () => this.setState({ modal: !this.state.modal });

  handleLogin = (e) => {
    this.toggleModal();
    alert(
      `hello: ${this.username.current.value} pass: ${this.password.current.value} remember: ${this.remember.current.checked}`
    );
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand tag={Link} to="/">
              Ristorante Con Fusion
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button outline color="info" onClick={this.toggleModal}>
                    <i className="fa fa-sign-in fa-lg"></i> login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Sign In</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label for="username">Username: </Label>
                <Input
                  type="text"
                  placeholder="username"
                  id="username"
                  name="username"
                  innerRef={this.username}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pass">Password: </Label>
                <Input
                  type="password"
                  placeholder="password"
                  id="password"
                  name="password"
                  innerRef={this.password}
                />
              </FormGroup>
              <FormGroup check className="mb-3">
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={this.remember}
                  />{" "}
                  remember me
                </Label>
              </FormGroup>
              <Button type="submit" color="primary">
                login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
