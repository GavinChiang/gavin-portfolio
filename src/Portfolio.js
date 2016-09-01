var React = require('react');
var Project = require('./Project.js')
var Modal = require('./Modal.js')
var ProjectDetail = require('./ProjectDetail.js')

var content = []
for (var key in ProjectDetail) {
	content.push(ProjectDetail[key])
}

var Portfolio = React.createClass({

	render: function() {
		return (
			<div> 
				{content.map(function(item, index) {
	            	return (<Modal modal_id={index} picname={item.picname} title={item.title} gitlink={item.gitlink}
	            				   language={item.language} description1={item.description1} description2={item.description2} />)} )}
				<section id="portfolio">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12 text-center">
			                    <h2>Portfolio</h2>
			                    <hr className="star-primary"/>
			                </div>
			            </div>
			            <div className="row">
			                {content.map(function(item, index) {return (<Project modal_id={index} picname={item.picname}/>)} )}
			            </div>
			        </div>
		   		</section>
			</div>
		);
	}
});

module.exports = Portfolio;