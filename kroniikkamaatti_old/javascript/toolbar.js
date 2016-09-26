var Navbar = ReactBootstrap.Navbar,
NavBrand = ReactBootstrap.NavBrand,
Nav = ReactBootstrap.Nav,
NavItem = ReactBootstrap.NavItem;

const navbarInstance = (
  <Navbar className="navBarDark">
    <NavBrand className="navBrand"><a href="#">Skeleton</a></NavBrand>
    <Nav>
      <NavItem className="navigationLink" eventKey={1} href="/images.html"><p className="navItem">Images</p></NavItem>
      <NavItem className="navigationLink" eventKey={2} href="/about.html"><p className="navItem">About</p></NavItem>
    </Nav>
  </Navbar>
);

ReactDOM.render(navbarInstance,
  document.getElementById('navigationBar')
);