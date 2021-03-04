import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Loading from "./Loading";
import { imagesUrl } from "../shared/baseUrl";

function RenderCard({ item, isLoading, errmess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errmess) {
    return (
      <h4
        className="text-danger text-center"
        style={{ height: 82, padding: 27 }}
      >
        {errmess}
      </h4>
    );
  } else if (item) {
    return (
      <Card>
        <CardImg src={imagesUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation && <CardSubtitle>{item.designation}</CardSubtitle>}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return null;
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 my-3">
          <RenderCard
            item={props.dishes2}
            isLoading={props.isLoading}
            errmess={props.errmess}
          />
        </div>
        <div className="col-12 col-md-4 my-3">
          <RenderCard
            item={props.promo}
            isLoading={props.isLoading}
            errmess={props.errmess}
          />
        </div>
        <div className="col-12 col-md-4 my-3">
          <RenderCard
            item={props.leaders}
            isLoading={props.isLoading}
            errmess={props.errmess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
