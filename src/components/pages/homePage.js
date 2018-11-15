import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import  { Animation, CardGroup, Card, CardImage, Row, Col, CardBody, CardTitle, CardText, Button, Container, View, Mask, Modal, ModalBody, ModalFooter, Iframe, Fa } from 'mdbreact';
class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">

<Container>
      <Row>
  <Col>
    <Card>
      <CardBody>
        <CardTitle tag="h3" className="font-weight-bold">Hidden Door Bookshelf & Hardware Solutions</CardTitle>
        <CardText>We have quickly become one of the leaders of the indoor doorway industry providing a variety of creative solutions for both homeowners and professional builders alike. Our bookcase doors are by far the most popular products that we offer. These include the Flush Mounted Bookcase, Surface Mounted Bifolding Bookcase and the Flush Mounted French style. We’ve also expanded our product line with the addition of our new Home Solutions line! All of our bookshelf doors can be customized with accessories such as upper and lower cabinets and multiple types of locking systems.</CardText>
        <Button color="success" width="50%">SHOP NOW</Button>
      </CardBody>
    </Card>
  </Col>
  </Row>
</Container>


      <Container>
        <Animation reveal type="FlipinY">
      <CardGroup>
    <Card>
    <View zoom>
  <CardImage src="https://www.themurphydoor.com/wp-content/uploads/home/tv_door_home_box.jpg" className="img-fluid" alt="Card image cap" top hover overlay="white-slight"/>
</View>
      <CardBody>
        <CardTitle tag="h5" className="font-weight-bold text-center">HOME SOLUTIONS</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button block color="success">SHOP NOW</Button>
      </CardBody>
    </Card>

    <Card>
    <View zoom>
  <CardImage src="https://www.themurphydoor.com/wp-content/uploads/home/maple_rts_card_bg.jpg" className="img-fluid" alt="" />
  <Mask className="flex-center">
  </Mask>
</View>
      <CardBody>
        <CardTitle tag="h5" className="font-weight-bold text-center">READY TO SHIP</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button block color="success">SHOP NOW</Button>
      </CardBody>
    </Card>

    <Card>
    <View zoom>
      <CardImage src="https://www.themurphydoor.com/wp-content/uploads/home/Pantry_Door_Home_Box.jpg" className="img-fluid" alt="Card image cap" top hover overlay="white-slight"/>
      <Mask className="flex-center">
      </Mask>
      </View>
      <CardBody>
        <CardTitle tag="h5" className="font-weight-bold text-center">SURFACE MOUNT</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button block color="success">SHOP NOW</Button>
      </CardBody>
    </Card>

  </CardGroup>
  </Animation>

  <Animation reveal type="FlipinY">
  <CardGroup>

<Card>
<View zoom>
<CardImage src="https://www.themurphydoor.com/wp-content/uploads/home/tv_door_home_box.jpg" className="img-fluid" alt="Card image cap" top hover overlay="white-slight"/>
</View>
  <CardBody>
    <CardTitle tag="h5" className="font-weight-bold text-center">HOME SOLUTIONS</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button block color="success">SHOP NOW</Button>
  </CardBody>
</Card>

<Card>
<View zoom>
<CardImage src="https://www.themurphydoor.com/wp-content/uploads/home/maple_rts_card_bg.jpg" className="img-fluid" alt="" />
<Mask className="flex-center">
</Mask>
</View>
  <CardBody>
    <CardTitle tag="h5" className="font-weight-bold text-center">READY TO SHIP</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button block color="success">SHOP NOW</Button>
  </CardBody>
</Card>

<Card>
<View zoom>
  <CardImage src="https://www.themurphydoor.com/wp-content/uploads/home/Pantry_Door_Home_Box.jpg" className="img-fluid" alt="Card image cap" top hover overlay="white-slight"/>
  <Mask className="flex-center">
  </Mask>
  </View>
  <CardBody>
    <CardTitle tag="h5" className="font-weight-bold text-center">SURFACE MOUNT</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button block color="success">SHOP NOW</Button>
  </CardBody>
</Card>

</CardGroup>
</Animation>

  </Container>





      </div>

    );
  }
}

export default Homepage;
