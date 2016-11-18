import React from 'react'
import Header from './header'
import Footer from './footer'

const HomeView = React.createClass({

    render: function() {
        return(
            <div className = 'homeView'>
                <Header />
                <HomeBody />
                <Footer />
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