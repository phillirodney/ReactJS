'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
	'h1',
	{ id: 'title',
		className: 'header',
		style: { backgroundColor: '#ffd700', color: '#00ffd7', fontFamily: 'verdana' } },
	'Hello Philli'
),
// Hello Philli is the child part of the element
document.getElementById('react-container'));
