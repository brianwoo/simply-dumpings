import { Fragment } from "react";
import { Button, Fade, Jumbotron } from "reactstrap";


function OrderOnline(props) {

    const OrderOnlineHeader = () => {
        return (
            <Jumbotron className="jumbotron-fluid order_online_bg_img">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4 pt-5 home_jumbotron_text">Online Ordering</h1>
                            <div>&nbsp;</div>
                            <p className="lead home_jumbotron_text">Simple. Healthy. Rewarding.</p>
                            <p className="lead home_jumbotron_text">Say hello to easy ordering, custom menus and free food. Make your first purchase on the web and get a $5 reward.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    };

    return (
        <Fragment>
            <OrderOnlineHeader/>
            <Fade>
                <div className="container">
                    <div className="row ">
                        <div className="col-12 text-center">
                            <Button className="form-field pt-3 pb-3 pl-4 pr-4 mt-4">ONLINE ORDER PICK-UP</Button>
                        </div>
                        <div className="col-12 text-center pt-5 pb-3">
                            <div>Please note:</div>
                        </div>
                        <div className="col-12 text-center pt-3 pb-4">
                            <div>
                                Pick-up times are predetermined based on volume. 
                                Be sure to note your pick-up time when checking out of the online store.
                                We can better accommodate requests for pick-up times after 3pm over the phone.
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Fragment>
    );
}

export default OrderOnline;