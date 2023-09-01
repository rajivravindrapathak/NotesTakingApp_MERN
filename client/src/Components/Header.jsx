import { Button, Col, Layout, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderCom = () => {
  return (
    <Header
      style={{
        alignItems: "center",
        display: "flex",
        position: "sticky",
        top: "0",
        zIndex: "1",
      }}
    >
      <Row gutter={[16, 16]} style={{ justifyContent: "space-evenly" }}>
        <Col
          className="logo"
          style={{ display: "flex" }}
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
        >
          <img
            src="https://img.freepik.com/premium-vector/notepad-logo-design-with-data-paper_446783-1250.jpg"
            alt="logo"
            style={{ height: "50px", width: "120px" }}
          />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <h1 style={{ color: "white" }}>welcome to Notes app</h1>
        </Col>

        <Col className="subDiv" xs={8} sm={8} md={8} lg={8} xl={8}>
          <Link to="/register">
            <Button type="primary">Register</Button>
          </Link>
          <Link to="/login">
            <Button style={{ marginLeft: "2%" }} type="primary">
              Login
            </Button>
          </Link>
        </Col>

      </Row>
    </Header>
  );
};

export default HeaderCom;
