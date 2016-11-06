import React from 'react'
import Header from './header'
import Footer from './footer'
import ACTIONS from '../actions'

const DataInputView = React.createClass({
    render: function() {
        return(
            <div className = 'dataInputView'>
                <Header/>
                <Petition />
                <Footer />
            </div>
        )
    }
})

const Petition = React.createClass({

     getInitialState: function(){
        return {
            setProfileClass: "untoggled",
            profileButtonSymbol: "+",
            setArrestClass: "untoggled",
            arrestButtonSymbol: "+",
            setChargeClass: "untoggled",
            chargeButtonSymbol: "+",
            setOverturnClass: "untoggled",
            overturnButtonSymbol: "+",
            setAgencyClass: "untoggled",
            agencyButtonSymbol: "+"
        }
    },

    _toggleProfileButton: function(){
        this.setState({
            setProfileClass:this.state.profileButtonSymbol === '+' ? 'toggled' : 'untoggled',
            profileButtonSymbol: this.state.profileButtonSymbol === '+' ? '-' : '+'
        })
    },
    _toggleArrestButton: function(){
        this.setState({
            setArrestClass:this.state.arrestButtonSymbol === '+' ? 'toggled' : 'untoggled',
            arrestButtonSymbol: this.state.arrestButtonSymbol === '+' ? '-' : '+'
        })
    },
    _toggleChargeButton: function(){
        this.setState({
            setChargeClass:this.state.chargeButtonSymbol === '+' ? 'toggled' : 'untoggled',
            chargeButtonSymbol: this.state.chargeButtonSymbol === '+' ? '-' : '+'
        })
    },
    _toggleOverturnButton: function(){
        this.setState({
            setOverturnClass:this.state.overturnButtonSymbol === '+' ? 'toggled' : 'untoggled',
            overturnButtonSymbol: this.state.overturnButtonSymbol === '+' ? '-' : '+'
        })
    },
    _toggleAgencyButton: function(){
        this.setState({
            setAgencyClass:this.state.agencyButtonSymbol === '+' ? 'toggled' : 'untoggled',
            agencyButtonSymbol: this.state.agencyButtonSymbol === '+' ? '-' : '+'
        })
    },

    _handlePetitionSubmit: function(evt) {
        evt.preventDefault()

        ACTIONS._submitPetition({
            legal_name:
            dob:
            ssn:
            dl:
            address:
            city:
            state:
            county:
            zip:
            sex:
            race:
            offense_date:
            offense_county:
            arresting_agency:
            arrest_date:
            a_address:
            a_city:
            a_state:
            a_county:
            charged:
            charge_date:
            charged_offenses:
            charge_cause_number:
            county_court_at_law: false,
            county_court_at_law_number: null,
            municipal_court: false,
            municipal_court_name: false,
            district_court: true,
            district_court_name:
            acquittal:
            acquittal_date:
            dismissal:
            dismissal_date:
            convicted:
            conviction_date:
            pardon:
            pardon_date:
            overturned:
            overturned_date:
            probation:
            deferred_adjudication:
        })

    },

    render: function() {
        var toggleProfileClass = {
            className: this.state.setProfileClass
        }
        var toggleArrestClass = {
            className: this.state.setArrestClass
        }
        var toggleChargeClass = {
            className: this.state.setChargeClass
        }
        var toggleOverturnClass = {
            className: this.state.setOverturnClass
        }
        var toggleAgencyClass = {
            className: this.state.setAgencyClass
        }

        return(
            <div className = 'petition'>
                <form onSubmit = {this._handlePetitionSubmit}>
                    {/* PERSONAL PROFILE*/}
                    <h3 onClick={this._toggleProfileButton}>{this.state.profileButtonSymbol} Personal Profile</h3>
                    <div id = 'profile' className={toggleProfileClass.className}>
                        <p>Full legal name:</p><input type ='text'/>
                        <p>Date of birth:</p><input type = 'date'/>

                        <p>Race:</p>
                            <input type = 'radio' name = 'race' value = 'HoL' />Hispanic or Latino <br />
                            <input type = 'radio' name = 'race' value = 'AIoAN' />American Indian or Alaska Native <br />
                            <input type = 'radio' name = 'race' value = 'Asian' />Asian <br />
                            <input type = 'radio' name = 'race' value = 'BoAA' />Black or African American <br />
                            <input type = 'radio' name = 'race' value = 'NHoOPI' />Native Hawaiian or Other Pacific Islander <br />
                            <input type = 'radio' name = 'race' value = 'White' />White <br />


                        <p>Sex:</p>
                            <input type = 'radio' name = 'sex'/>Male<br/>
                            <input type = 'radio' name = 'sex'/>Female


                        <div className = 'address'>Address at time of the arrest:
                            <input type = 'text' placeholder = 'address'/>
                            <input type = 'text' placeholder = 'city' />
                            <input type = 'text' placeholder = 'state' />
                            <input type = 'text' placeholder = 'zipcode'/>
                            <input type = 'text' placeholder = 'county' />
                        </div>

                        <div className = 'address'>Current address:
                            <input type = 'text' placeholder = 'address'/>
                            <input type = 'text' placeholder = 'city' />
                            <input type = 'text' placeholder = 'state' />
                            <input type = 'text' placeholder = 'zipcode'/>
                            <input type = 'text' placeholder = 'county' />
                        </div>
                    </div>
                    {/* ARREST PROFILE*/}
                    <h3 onClick={this._toggleArrestButton}>{this.state.arrestButtonSymbol}Arrest</h3>
                    <div id = 'arrest' className={toggleArrestClass.className}>
                        <p>Date of the arrest:</p><input type = 'date'/>
                        <p>Location of the arrest:
                            <input type = 'text' placeholder = 'city'/><br/>
                            <input type = 'text' placeholder = 'county'/>
                        </p>
                        <p>Agency who arrested you:</p><input type = 'text'/>
                        <p>Offense (exactly as it is written on your record):</p><input type = 'text' />
                    </div>

                    {/* CHARGE PROFILE*/}
                    <h3 onClick={this._toggleChargeButton}>{this.state.chargeButtonSymbol}Charge</h3>
                    <div id = 'charge' className={toggleChargeClass.className}>
                        <p>Date of charge:</p><input type = 'date'/>
                        <p>List all the offenses (separate with a comma ,):</p>
                            <textarea placeholder = 'Offenses'></textarea>
                        <p>County, city, name of court where charges were filed:</p>
                            County: <input type = 'text' />
                            City: <input type = 'text' />
                            Name: <input type = 'text' />

                        <p>Cause # (exactly as written on criminal history):</p> <input type = 'text' />

                    </div>
                    {/* OVERTURN PROFILE*/}
                    <h3 onClick={this._toggleOverturnButton}>{this.state.overturnButtonSymbol}Disposition</h3>
                    <div id = 'overturn' className={toggleOverturnClass.className}>
                        <p>Convicted:</p>
                            <input type = 'radio' name = 'convicted' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'convicted' value = 'no'/>No<br/>

                        <p>Dismissed:</p>
                            <input type = 'radio' name = 'dismiss' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'dismiss' value = 'no'/>No<br/>

                        <p>Pardoned:</p>
                            <input type = 'radio' name = 'pardon' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'pardon' value = 'no'/>No<br/>

                        <p>Overturned:</p>
                            <input type = 'radio' name = 'overturn' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'overturn' value = 'no'/>No<br/>
                    </div>
                    {/* AGENCY PROFILE*/}
                    <h3 onClick={this._toggleAgencyButton}>{this.state.agencyButtonSymbol}Agency</h3>
                    <div id = 'agency' className={toggleAgencyClass.className}>Address of arresting agency:
                        <input type = 'text' placeholder = 'address'/>
                        <input type = 'text' placeholder = 'city' />
                        <input type = 'text' placeholder = 'state' />
                        <input type = 'text' placeholder = 'zipcode'/>
                        <input type = 'text' placeholder = 'county' />
                    </div>

                    <p>ONCE YOU HIT SUBMIT YOUR FORMS WILL BE GENERATED AND EMAILED TO THE ADDRESS YOU PROVIDED. ALL INFORMATION WILL BE REMOVED FROM THIS SITE</p>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
})

export default DataInputView