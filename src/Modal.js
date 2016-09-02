var React = require('react');
var Fa = require('./Fa.js');

function Modal(props) {

    var pic = require('./img/' + props.picname + '.png')

    return (
        <div className="portfolio-modal modal fade" id={"portfolioModal"  + props.modal_id} tabIndex="-1" role="dialog" aria-hidden="true">
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
                            <img src={pic} className="img-responsive img-centered" alt=""/>
	                            <ul>
                                    <p><li> {props.description1} </li></p>
		                            <p><li> {props.description2} </li></p>
	                            </ul>
                                {props.demo ?  (<p><a href={props.demo} >demo </a> </p>) : null}
                            <ul className="list-inline item-details">
                                <li>
                                    <strong> <a href={props.gitlink}>Check on GitHub</a>  </strong>
                                </li>
                                <li>
                                    <strong> {props.language} </strong>
                                </li>
                                <li>
                                    <strong> {props.type} </strong>
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