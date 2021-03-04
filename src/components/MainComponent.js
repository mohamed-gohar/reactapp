import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dishes2={this.props.dishes2.dishes.filter((dish) => dish.featured)[0]}
          isLoading={this.props.dishes2.isLoading}
          errmess={this.props.dishes2.errmess}
          promo={this.props.promos.promos.filter((promo) => promo.featured)[0]}
          isLoading={this.props.promos.isLoading}
          errmess={this.props.promos.errmess}
          leaders={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          isLoading={this.props.leaders.isLoading}
          errmess={this.props.leaders.errmess}
        />
      );
    };

    const DishPage = ({ match }) => {
      return (
        <Fragment>
          <DishDetail
            dish={
              this.props.dishes2.dishes.filter(
                (dish) => dish.id == match.params.id
              )[0]
            }
            isLoading={this.props.dishes2.isLoading}
            errmess={this.props.dishes2.errmess}
            comments={this.props.comments.comments.filter(
              (comment) => comment.dishId == match.params.id
            )}
            errmess={this.props.comments.errmess}
            postComment={this.props.postComment}
          />
        </Fragment>
      );
    };

    return (
      <div className="app">
        <Header />

        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={370}
            unmountOnExit
          >
            <Switch location={this.props.location}>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.props.dishes2} />}
              />
              <Route path="/menu/:id" component={DishPage} />
              <Route
                path="/about"
                component={() => <About leaders={this.props.leaders} />}
              />
              <Route path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dishes2: state.dishes2,
    leaders: state.leaders,
    promos: state.promos,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
