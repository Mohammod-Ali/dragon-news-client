import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Header from "../Pages/Share/Header/Header";
import LeftSideNav from "../Pages/Share/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Share/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
        <Header></Header>
        <Container>
      <Row>
        <Col lg='2' className="d-none d-lg-block">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg='7'>
          <Outlet></Outlet>
        </Col>
        <Col lg='3' className="d-none d-lg-block">
          <RightSideNav></RightSideNav>
        </Col>
      </Row>
    </Container>
    <Footer></Footer>
    </div>
  );
};

export default Main;
