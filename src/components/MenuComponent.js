import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { imagesUrl } from "../shared/baseUrl";
import Loading from "./Loading";

function CardMenu({ dish }) {
  return (
    <Card tag={Link} to={`/menu/${dish.id}`}>
      <CardImg width="100%" src={imagesUrl + dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}
function Menu(props) {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-6 my-2">
        <CardMenu dish={dish} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errmess) {
    return (
      <div className="container">
        <div
          className="row text-danger justify-content-center"
          style={{ height: 200, padding: 77 }}
        >
          <h4>{props.dishes.errmess}</h4>
        </div>
      </div>
    );
  } else if (props.dishes.dishes) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h2>Menu</h2>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
}
export default Menu;
