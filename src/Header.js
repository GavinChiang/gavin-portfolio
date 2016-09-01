var React = require('react');

function Header(props) {

    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
            <img className="img-responsive" src="img/profile.png" alt=""/>
                        <div className="intro-text">
                            <span className="name">Gavin Chiang</span>
                            <hr className="star-light"/>
                            <span className="skills">Web Developer - Adventurer - Software Engineer </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

module.exports = Header;