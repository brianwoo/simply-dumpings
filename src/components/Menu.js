import classnames from "classnames";
import { Fragment, useState } from "react";
import { Fade, Jumbotron, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import MenuItems from "./MenuItems";


function Menu(props) {

    // tab state
    const [activeTab, setActiveTab] = useState('appetizer');
    const switchTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const MenuHeader = () => {
        return (
            <Jumbotron className="jumbotron-fluid menu_bg_img">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4 pt-5 home_jumbotron_text">Menu</h1>
                            <div>&nbsp;</div>
                            <p className="lead home_jumbotron_text">Passion, Community and Made-Right-Here Goodness.</p>
                            <p className="lead home_jumbotron_text">We are all about lifting your day and spirits with delicious food, warm smiles and efficient service.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    };


    return (
        <Fragment>
            <MenuHeader/>
            <div className="container">
                <Nav className="menu-page-nav">
                    <NavItem>
                        <NavLink className={classnames({active: activeTab === 'appetizer'})}
                        onClick={() => switchTab('appetizer')}>
                            Appetizer
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: activeTab === 'dumpling'})}
                        onClick={() => switchTab('dumpling')}>
                            Dumpling
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: activeTab === 'rice'})}
                        onClick={() => switchTab('rice')}>
                            Rice
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: activeTab === 'noodle'})}
                        onClick={() => switchTab('noodle')}>
                            Noodle
                        </NavLink>
                    </NavItem>  
                    <NavItem>
                        <NavLink className={classnames({active: activeTab === 'meat'})}
                        onClick={() => switchTab('meat')}>
                            Meat
                        </NavLink>
                    </NavItem> 
                    <NavItem>
                        <NavLink className={classnames({active: activeTab === 'dessert'})}
                        onClick={() => switchTab('dessert')}>
                            Dessert
                        </NavLink>
                    </NavItem>                                                           
                </Nav>
                <Fade>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="appetizer">
                            <MenuItems menuData={props.menu.appetizer}/>
                        </TabPane>
                        <TabPane tabId="dumpling">
                            <MenuItems menuData={props.menu.dumpling}/>
                        </TabPane>
                        <TabPane tabId="rice">
                            <MenuItems menuData={props.menu.rice}/>
                        </TabPane>
                        <TabPane tabId="noodle">
                            <MenuItems menuData={props.menu.noodle}/>
                        </TabPane>   
                        <TabPane tabId="meat">
                            <MenuItems menuData={props.menu.meat}/>
                        </TabPane>  
                        <TabPane tabId="dessert">
                            <MenuItems menuData={props.menu.dessert}/>
                        </TabPane>                                                        
                    </TabContent>
                </Fade>
                <div className="row">
                    <div></div>
                </div>
            </div>
        </Fragment>
    );
}


export default Menu;