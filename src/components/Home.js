import { Fragment } from "react";
import { Jumbotron, Fade } from "reactstrap";

function Home(props) {

    const FoodHeader = () => {
        return (
            <Jumbotron className="jumbotron-fluid home_bg_img">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4 pt-5 home_jumbotron_text">Simply Dumplings</h1>
                            <div>&nbsp;</div>
                            <p className="lead home_jumbotron_text">From the hands of our chefs, to the comfort of your home.</p>
                            <p className="lead home_jumbotron_text">Restaurant quality meals for home &amp; business catering, curbside pick-up &amp; delivery.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    };



    return (
        <Fragment>
            <FoodHeader/>
            <Fade big>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="text-bold">Online Ordering &amp; Curbside Pickup</div>
                    </div>
                    <div className="row justify-content-center pb-2 pt-3">
                        <div>Hours:</div>
                    </div>
                    <div className="row justify-content-center p-2">
                        <div>Monday - Saturday 11am - 9pm</div>
                    </div>
                    <div className="row justify-content-center p-2">
                        <div>Sunday 11am - 6pm</div>
                    </div>
                    <div>&nbsp;</div>
                </div>
            </Fade>
        </Fragment>
    );
}

export default Home;