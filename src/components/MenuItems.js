import { Col, Container, Row } from "reactstrap";


function MenuItems(props) {

    const menuItem = props.menuData.map((dish) => {
        return (
            <Col key={dish.id} xs="12" sm="6" md="4" className="dishes-menu-text pb-2">
                <Row>
                    <Col xs="9" >
                        <div >{dish.title}</div>
                    </Col>
                    <Col xs="3">
                        <div className="float-right">{dish.price.toFixed(2)}</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="dishes-menu-cText">
                        <div>{dish.cTitle}</div>
                    </Col>
                </Row>
            </Col>
        );
    });


    return (
        <Container className="pt-4 pb-3">
            <Row>
                {menuItem}
            </Row>
        </Container>
    );
}

export default MenuItems;