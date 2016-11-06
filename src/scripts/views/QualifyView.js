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

    getInitialState: function() {
        return {
            chargedDisplay: 'none',
            convictedDisplay: 'none',
            overturnedDisplay: 'none'
        }
    },

    _extendQuestions: function() {
        this.setState({
            chargedDisplay: this.state.arrested.checked.value === 'yes' ? 'block' : 'none'
        })
    },

    render: function() {

        var _chargedStyle = {
            display: this.state.chargedDisplay
        }

        var _convictedStyle = {
            display: this.state.convictedDisplay
        }

        var _overturnedStyle = {
            display: this.state.overturnedDisplay
        }

        return (
            <div className = 'quallifyForm'>


                <p>Have you been convicted of felony in the past 5 years?</p>

                        <input type = 'radio' name = 'felony' value = 'no' />No <br />
                        <input type = 'radio' name = 'felony' value = 'yes' />Yes


                <p>What is the date of the alleged crime you wish to have expunged?</p>
                    <input type = 'date' />

                <p>What is the class of alleged crime you wish to have expunged?</p>
                    <input type = 'radio' name = 'crimeClass' value = 'MisdC' />Misdemeanor C <br />
                    <input type = 'radio' name = 'crimeClass' value = 'MisdB' />Misdemeanor B <br />
                    <input type = 'radio' name = 'crimeClass' value = 'MisdA' />Misdemeanor A <br />
                    <input type = 'radio' name = 'crimeClass' value = 'Felony' />Felony

                <div className = 'arrestedQualify'>
                    <p>Were you arrested? (non-custodial or otherwise)</p>
                        <input type = 'radio' name = 'arrested' value = 'yes' onChange = {this._extendQuestions}/>Yes <br />
                        <input type = 'radio' name = 'arrested' value ='no' onChange = {this._extendQuestions}/>No <br />
                </div>

                <div className = 'chargedQualify' style = {_chargedStyle}>
                    <p>Were you charged?</p>
                        <input type = 'radio' name = 'charged' value = 'yes' />Yes <br />
                        <input type = 'radio' name = 'charged' value ='no' />No <br />
                </div>

                <div className = 'convictedQualify' style = {_convictedStyle}>
                    <p>Were you convicted?</p>
                        <input type = 'radio' name = 'convicted' value = 'yes' />Yes <br />
                        <input type = 'radio' name = 'convicted' value ='no' />No <br />
                </div>

                <div className = 'overturnQualify' style = {_overturnedStyle}>
                    <p>Was the conviction overturned or pardoned?</p>
                        <input type = 'radio' name = 'overturned' value = 'yes' />Yes <br />
                        <input type = 'radio' name = 'overturned' value ='no' />No <br />
                </div>

                <button>Continue to Login</button>
                <button>Returning guest sign in here</button>

            </div>
        )
    }
})

export default QualifyView