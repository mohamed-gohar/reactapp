import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { imagesUrl } from "../shared/baseUrl";
import Loading from "./Loading";

const RenderLeader = ({ leader }) => {
  return (
    <Fragment>
      <div className="col-2 d-none d-sm-block">
        <img src={imagesUrl + leader.image} alt={leader.name} width="100%" />
      </div>
      <div className="col-sm-10 mb-3">
        <h3>{leader.name}</h3>
        <p>{leader.designation}</p>
        <p>{leader.description}</p>
      </div>
    </Fragment>
  );
};

const LeadersAdd = (props) => {
  const leaders = props.leaders.leaders.map((leader) => {
    return (
      <Fragment key={leader.id}>
        <RenderLeader leader={leader} />
      </Fragment>
    );
  });

  if (props.leaders.isLoading) {
    return (
      <div className="row">
        <Loading />
      </div>
    );
  } else if (props.leaders.errmess) {
    return (
      <div
        className="row text-danger justify-content-center"
        style={{ height: 200, padding: 77 }}
      >
        <h4>{props.leaders.errmess}</h4>
      </div>
    );
  } else if (props.leaders.leaders) {
    return (
      <div className="row mb-5">
        <div className="col-12 mb-4 text-center">
          <h2>Corporate Leadership</h2>
        </div>
        {leaders}
      </div>
    );
  }
};

function About(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h2>About</h2>
          <hr />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.
          </p>
          <p>
            The restaurant traces its humble beginnings to{" "}
            <em>The Frying Pan</em>, a successful chain started by our CEO, Mr.
            Peter Pan, that featured for the first time the world's best
            cuisines in a pan.
          </p>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">HK Fine Foods Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody>
              <blockquote className="blockquote mb-0">
                <p className="mb-0">
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="source">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <hr />
      <LeadersAdd leaders={props.leaders} />
    </div>
  );
}

export default About;
