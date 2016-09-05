/*This file is for Font Awesome icon*/
var React = require('react');
var PropTypes = React.PropTypes;

function Fa(props) {
	return (
		<span><i className={'fa fa-' + props.name} style={props.style}></i></span>
	)
};

Fa.PropTypes = {
	name: PropTypes.string.isRequired,
	style: PropTypes.string,
}

module.exports = Fa;