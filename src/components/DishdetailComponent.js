import React, { Component, Fragment } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { imagesUrl } from "../shared/baseUrl";
import Loading from "./Loading";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelOpen: false,
    };
  }
  modelToggle = () => this.setState({ isModelOpen: !this.state.isModelOpen });
  postComment = (vals) => {
    this.modelToggle();
    this.props.postComment(
      this.props.dish.id,
      Number(vals.rate),
      vals.name,
      vals.comment
    );
  };

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={imagesUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(dishComment) {
    return dishComment.map((comment) => {
      return (
        <Fragment key={comment.id}>
          <li>{comment.comment}</li>
          <li className="my-3">
            -- {comment.author},
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </li>
        </Fragment>
      );
    });
  }

  renderDishComments = () => {
    if (this.props.isLoading) {
      return (
        <div className="row">
          <Loading />
        </div>
      );
    } else if (this.props.errmess) {
      return (
        <div className="row text-danger text-center">
          <h4>{this.props.errmess}</h4>
        </div>
      );
    } else {
      return (
        <Fragment>
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h2>{this.props.dish.name}</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 my-3">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-7 my-3">
              <h4>comments</h4>
              <ul className="list-unstyled">
                {this.renderComments(this.props.comments)}
              </ul>
              <Button outline onClick={this.modelToggle}>
                <i className="fa fa-pencil"></i> add comment
              </Button>
            </div>
          </div>
        </Fragment>
      );
    }
  };

  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    return (
      <div className="container">
        {this.renderDishComments()}

        <Modal isOpen={this.state.isModelOpen} toggle={this.modelToggle}>
          <ModalHeader toggle={this.modelToggle}>Submit Comment:</ModalHeader>
          <ModalBody>
            <LocalForm
              onSubmit={(vals) => this.postComment(vals)}
              autoComplete="off"
            >
              <FormGroup>
                <Label for="rate">Rating</Label>
                <Control.select
                  model=".rate"
                  id="rate"
                  className="form-control"
                >
                  <option></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Control.select>
              </FormGroup>
              <FormGroup>
                <Label for="name">Your Name</Label>
                <Control.text
                  model=".name"
                  id="name"
                  placeholder="name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "required and",
                    minLength: "should be >= 3 letters",
                    maxLength: "should be <=15 letters",
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="comment">comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  rows="6"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(50),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".comment"
                  show="touched"
                  messages={{
                    required: "required and ",
                    minLength: "should be >= 3 letters",
                    maxLength: "should be <=50 letters",
                  }}
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetail;
