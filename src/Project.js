var React = require('react');
var Fa = require('./Fa.js')

function Project(props) {

    var pic = require('./img/' + props.picname + '.png')

    return (
        <div className="col-sm-4 portfolio-item">
            <a href={"#portfolioModal" + props.modal_id} className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        <Fa name={"search-plus fa-3x"}/>
                    </div>
                </div>
                <img src={pic} className="img-responsive" alt=""/>
            </a>
        </div>
    );
};

module.exports = Project;