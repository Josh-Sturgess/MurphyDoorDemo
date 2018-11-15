import React from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

render() {
  const container = {height: 1300}
    return(
      <div>
        <Router>
        <Navbar color="light-blue darken-4" dark expand="md" scrolling fixed="top">
        <Container>
          <NavbarBrand href="/" width="auto">
          <img src="https://www.themurphydoor.com/wp-content/uploads/2015/07/header-logo-white.png" height="60" width="286" alt=""/>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left nav-fill>

              <NavItem>
                  <NavLink to="#" nav-fill>Home</NavLink>
              </NavItem>

              <NavItem>
              <Dropdown>
                      <DropdownToggle nav caret>Store</DropdownToggle>
                      <DropdownMenu>
                      <DropdownItem href="#">Flush Mount</DropdownItem>
                      <DropdownItem href="#">Surface Mount</DropdownItem>
                      <DropdownItem href="#">French Doors</DropdownItem>
                      <DropdownItem href="#">Hardware Kits</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </NavItem>

              <NavItem>
              <Dropdown>
                      <DropdownToggle nav caret>About</DropdownToggle>
                      <DropdownMenu>
                      <DropdownItem href="#">Our Company</DropdownItem>
                      <DropdownItem href="#">Careers</DropdownItem>
                      <DropdownItem href="#">Product Comparison</DropdownItem>
                      <DropdownItem href="#">Customer Testimonials</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </NavItem>

              <NavItem>
              <Dropdown>
                      <DropdownToggle nav caret>Dealers</DropdownToggle>
                      <DropdownMenu>
                      <DropdownItem href="#">Action</DropdownItem>
                      <DropdownItem href="#">Anothercentor Action</DropdownItem>
                      <DropdownItem href="#">Something else here</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </NavItem>

            </NavbarNav>

            <NavbarNav right>
              <NavItem>
                <NavLink to="https://www.facebook.com/MurphyDoor/"><Fa icon="facebook" size="lg"/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"><Fa icon="twitter" size="lg" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"><Fa icon="google-plus" size="lg"/></NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
          </Container>
        </Navbar>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;
