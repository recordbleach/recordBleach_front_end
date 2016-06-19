const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	const Header = React.createClass({
		render: () => {
			return <h1>YOLO</h1>
		}
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()