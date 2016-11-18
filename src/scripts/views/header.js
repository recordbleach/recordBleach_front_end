import React from 'react'

var Header = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Record Bleach</h1>
                <nav>
                    <a href = '#home'>Home</a>
                    <a href = '#qualifyForm'>Do I Qualify?</a>
                    <a href = '#login'>Login</a>
                </nav>
			</header>
		)
	}
})

export default Header