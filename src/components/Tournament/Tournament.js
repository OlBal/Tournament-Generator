import React, { Component } from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
import Semi from "../Semi";
import Final from "../Final";
import Matches from "../Matches";
import Button from "../Button/Button";

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container__tournament">
          <h1 className="title__App">PING PONG</h1>

          <section className="container__roster round-one">
            <Matches />
          </section>

          <section className="container__roster semi-final">
            <h2 className="round__title"></h2>
            <Semi />
          </section>

          <section className="container__roster final">
            {/* <Final /> */}
          </section>

          <Link to={"/"} className="nav-link nav__tournament">
            <Button buttonClass="button settings" label="Settings" />
          </Link>
        </div>
      </>
    );
  }
}

export default Tournament;
