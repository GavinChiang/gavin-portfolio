var React = require('react');
var Fa = require('./Fa.js');

function Footer(props) {

    return (
        <footer className="text-center" id="footer">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Contact</h3>
                            <a href="mailto:cchsuan@umich.edu" className="btn-social btn-outline"> <Fa name={"envelope-o fa-lg"} /> </a>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Other sites</h3>
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/gavin.chiang.98" className="btn-social btn-outline"> <Fa name={"facebook fa-lg"} /> </a>
                                </li>
                                <li>
                                    <a href="https://github.com/GavinChiang" className="btn-social btn-outline"> <Fa name={"github fa-lg"} /> </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/chen-hsuan-gavin-chiang-186469109" className="btn-social btn-outline"> <Fa name={"linkedin fa-lg"} /> </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Blog</h3>
                            <a href="https://gavinchiang-blog.herokuapp.com" className="btn-social btn-outline"> <Fa name={"share fa-lg"} /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyright &copy; Gavin Chiang 2016 &nbsp; This page is built in reactjs by Gavin Chiang.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


module.exports = Footer;