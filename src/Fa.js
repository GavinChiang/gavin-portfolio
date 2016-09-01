/*This file is for Font Awesome icon*/
var React = require('react');

function Fa (props) {
	return (
		<span><i className={'fa fa-' + props.name} style={props.style}></i></span>
	)
};

module.exports = Fa;