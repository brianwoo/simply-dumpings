import { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

class NavMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <div >
                <Navbar className="menu-bar" expand="md" >
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand href={process.env.PUBLIC_URL + "/"}>
                        <img src="assets/images/dumpling_logo.png" 
                            alt="dumpling logo" 
                            height="70"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href={process.env.PUBLIC_URL + "/#/menu"}>MENU</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={process.env.PUBLIC_URL + "/#/catering"}>CATERING</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={process.env.PUBLIC_URL + "/#/order"}>ORDER ONLINE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={process.env.PUBLIC_URL + "/#/reserve"}>RESERVATIONS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={process.env.PUBLIC_URL + "/#/contactus"}>CONTACT</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }


}


export default NavMenu;