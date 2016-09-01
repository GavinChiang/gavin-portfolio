var React = require('react');

function About(props) {

    return (
        <section className="success" id="about">
            <div  className="container">
                <div  className="row">
                    <div  className="col-lg-12 text-center">
                        <h2>About Gavin</h2>
                        <hr  className="star-light"/>
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-lg-4 col-lg-offset-2">
                        <p>Second year ECE master student in University of Michigan, Ann Arbor.</p>
                        <p>I love coding and try experiencing the world through programming.</p>
                        <p>Please feel free check my resume and blog, contact me right away!</p>
                        <p>I am keen to share more about myself with you.</p>
                    </div>
                    <div  className="col-lg-4">
                        <p><ul>
                            <li>Java</li>
                            <li>Ruby on Rails</li>
                            <li>ReactJS, NodeJS</li>
                            <li>C++</li>
                            <li>SQL, Git</li>
                            <li>HTML, CSS, Bootstrap</li>
                            <li>AWS, Heroku, Google Analytics, Facebook Graph API</li>
                        </ul></p>
                    </div>
                </div>
            </div>
        </section>
    );
};


module.exports = About;