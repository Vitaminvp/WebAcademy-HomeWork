import * as React from 'react';
import './footer.component.scss';
export class Footer extends React.Component{
    render(){
        return  (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>XBOX</h4>
                            <ul>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Privacy & cookies </a></li>
                                <li><a href="#">Terms of use </a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Developers</h4>
                            <ul>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Windows 10</a></li>
                                <li><a href="#">Creators Program</a></li>
                                <li><a href="#">Designed for XBOX</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Follow Us</h4>
                            <ul className="social-links">
                                <li><a href="#"><i className="icon-facebook">&nbsp;</i></a></li>
                                <li><a href="#"><i className="icon-twitter">&nbsp;</i></a></li>
                                <li><a href="#"><i className="icon-instagram">&nbsp;</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="hr">&nbsp;</div>
                        <div className="credits"><span>English (United States)</span><span>© Microsoft 2017</span></div>
                    </div>
                </div>
            </footer>
    );

    }
}