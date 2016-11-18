import React from 'react'
import Header from './header'

const HomeView = React.createClass({

    render: function() {
        return(
            <div className = 'homeView'>
                <Header />
                <HomeBody />
            </div>
        )
    }
})

const HomeBody = React.createClass({
    render: function() {
        return(
            <div className = 'homeBody'>
                <h1>Welcome to Record Bleach</h1>
                <p>Turn your sheet white again</p>
            </div>
        )
    }
})

export default HomeView