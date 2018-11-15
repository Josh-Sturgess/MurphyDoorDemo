import React, { Component } from 'react';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';

class CarouselPage extends Component {
  render(){
    return(
      <Container>
        <h4 className="mt-5 mb-2">Basic example</h4>
        <Carousel
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="https://www.themurphydoor.com/wp-content/uploads/home/black_friday_slider.png" alt="First slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="https://www.themurphydoor.com/wp-content/uploads/home/services_slider_1450x800.jpg" alt="Second slide" />
              </View>
            </CarouselItem>

          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;
