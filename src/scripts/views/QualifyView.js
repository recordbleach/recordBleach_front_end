import React from 'react'
import Header from './header'

const QualifyView = React.createClass({
    render: function() {
        return (
            <div className = 'qualifyView'>
                <Header />
                <QualifyForm />
            </div>
        )
    }
})

const QualifyForm = React.createClass({
    render: function() {
        return (
            <form>

                <p>Have you been convicted of felony in the past 5 years?</p>
                    <input type = 'radio' value = 'no' />No <br />
                    <input type = 'radio' value = 'yes' />Yes

                <p>What is the date of the alleged crime you wish to have expunged?</p>
                    <input type = 'text' />

                <p>What is the class of alleged crime you wish to have expunged?</p>
                    <input type = 'radio' value = 'MisdC' />Misdemeanor C <br />
                    <input type = 'radio' value = 'MisdB' />Misdemeanor B <br />
                    <input type = 'radio' value = 'MisdA' />Misdemeanor A <br />
                    <input type = 'radio' value = 'Felony' />Felony

                <p>Were you arrested? (non-custodial or otherwise)</p>
                    <input type = 'radio' value = 'yes' />Yes <br />
                    <input type = 'radio' value ='no' />No <br />

                <p>Were you charged?</p>
                    <input type = 'radio' value = 'yes' />Yes <br />
                    <input type = 'radio' value ='no' />No <br />

                <p>Were you convicted?</p>
                    <input type = 'radio' value = 'yes' />Yes <br />
                    <input type = 'radio' value ='no' />No <br />

                <p>Was the conviction overturned or pardoned?</p>
                    <input type = 'radio' value = 'yes' />Yes <br />
                    <input type = 'radio' value ='no' />No <br />

                <button>Continue to Login</button>

            </form>
        )
    }
})

export default QualifyView