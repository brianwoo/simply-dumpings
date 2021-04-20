import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutubeSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {

    const InstagramIcon = <FontAwesomeIcon icon={faInstagram} size="1x"/>
    const YoutubeIcon = <FontAwesomeIcon icon={faYoutubeSquare} size="1x"/>
    const FacebookIcon = <FontAwesomeIcon icon={faFacebookSquare} size="1x"/>

    return (
        <div className="container">
            <hr/>
            <div className="row text-center">
                <div className="col-12 col-md-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 p-0">
                                <div >101 9 Avenue SW</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 p-0">
                                <div >Calgary, AB T2P1J9</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="container">
                        <div className="row ">
                            <div className="col-12 p-0 ">
                                <div><a href="tel:403-888-8888">403-888-8888</a></div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 p-0 ">
                                <div>{InstagramIcon} {YoutubeIcon} {FacebookIcon}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5 pr-0 pl-0">Mon - Sat</div>
                            <div className="col-5 pl-0 ">11am - 9pm</div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5 pr-0 pl-0">Sun</div>
                            <div className="col-5 pl-0 ">11am - 6pm</div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Footer;