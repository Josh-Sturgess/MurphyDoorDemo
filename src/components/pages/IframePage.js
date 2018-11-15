import React, { Component } from "react";
import { Iframe, Container } from "mdbreact";

class IframePage extends Component {
  render() {
    return (
      <Container>
      <Iframe src="https://www.youtube.com/embed/vCk8LMU0lIQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
      </Container>
    );
  }
}

export default IframePage;
