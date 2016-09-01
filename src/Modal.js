var React = require('react');
var Fa = require('./Fa.js');

function Modal(props) {

    return (
        <div className="portfolio-modal modal fade" id={"portfolioModal"  + props.modal_id} tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                    <div className="rl">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="modal-body">
                            <h2>{props.title}</h2>
                            <hr className="star-primary"/>
                            <img src={"img/portfolio/"+ props.picname +".png"} className="img-responsive img-centered" alt=""/>
	                            <ul>
		                            <p><li> {props.description1} </li></p>
		                            <p><li> {props.description2} </li></p>
	                            </ul>
                            <ul className="list-inline item-details">
                                <li>Link:
                                    <strong> <a href={props.gitlink}>GitHub</a>  </strong>
                                </li>
                                <li>Language:
                                    <strong> {props.language} </strong>
                                </li>
                                <li>Service:
                                    <strong><a href="http://startbootstrap.com">Web Development</a>  </strong>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-default" data-dismiss="modal"> <Fa name={"times"}/>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

module.exports = Modal;