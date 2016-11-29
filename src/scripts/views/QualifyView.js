import React from 'react'
import Header from './header'
import Footer from './footer'

const QualifyView = React.createClass({
    render: function() {
        return (
            <div className = 'qualifyView'>
                <Header />
                <QualifyForm />
                <Footer />
            </div>
        )
    }
})

const QualifyForm = React.createClass({

    _handleGuestReturn: function() {
        location.hash = 'login'
    },

    render: function() {

        return (
            <div className = 'quallifyForm'>


                <p>Have you been convicted of felony in the past 5 years?</p>
                        <input type = 'radio' name = 'felony' value = 'no' />No <br />
                        <input type = 'radio' name = 'felony' value = 'yes' />Yes
                        <p className = 'notEligible'>You are not eligible for expunction at this time</p>

                <p>What is the date of the alleged crime you wish to have expunged?</p>
                    <input type = 'date' />

                <p>What is the class of alleged crime you wish to have expunged?</p>
                <p><b>WARNING: Make sure the Statute of Limitations (SoL) has passed before attempting to expunge your record.</b></p>
                    <input type = 'radio' name = 'crimeClass' value = 'MisdC' />Misdemeanor C (SoL: Two Years)<br />
                    <input type = 'radio' name = 'crimeClass' value = 'MisdB' />Misdemeanor B (SoL: Two Years)<br />
                    <input type = 'radio' name = 'crimeClass' value = 'MisdA' />Misdemeanor A (Sol: Two Years)<br />
                    <input type = 'radio' name = 'crimeClass' value = 'Felony' />Felony (SoL: Varies based on crime; contact a lawyer for more information)

                <div className = 'arrestedQualify'>
                    <p>Were you arrested? (non-custodial or otherwise)</p>
                        <input type = 'radio' name = 'arrested' value = 'yes' onChange = {this._extendQuestions}/>Yes <br />
                        <input type = 'radio' name = 'arrested' value ='no' onChange = {this._extendQuestions}/>No <br />
                </div>

                <div className = 'chargedQualify'>
                    <p>Were you charged?</p>
                        <input type = 'radio' name = 'charged' value = 'yes' />Yes <br />
                        <input type = 'radio' name = 'charged' value ='no' />No <br />
                </div>

                <div className = 'convictedQualify'>
                    <p>Were you convicted?</p>
                        <input type = 'radio' name = 'convicted' value = 'yes' />Yes <br />
                        <input type = 'radio' name = 'convicted' value ='no' />No <br />
                </div>

                <div className = 'overturnQualify'>
                    <p>Was the conviction overturned or pardoned?</p>
                        <input type = 'radio' name = 'overturned' value = 'yes' />Yes <br />
                        <input type = 'radio' name = 'overturned' value ='no' />No <br />
                </div>
            </div>
        )
    }
})

export default QualifyView