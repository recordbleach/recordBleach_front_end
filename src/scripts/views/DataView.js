import React from 'react'
import Header from './header'
import Footer from './footer'
import ACTIONS from '../actions'
import $ from 'jquery'
import STORE from '../store'


const DataInputView = React.createClass({

    getInitialState: function() {
        return STORE._getData()
    },

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

    _handleRadioInput: function(inputArray) {

        for(var i = 0; i < inputArray.length; i++) {
            var genderObj = inputArray[i]
            if(genderObj.checked) {
                return genderObj.value
            }
        }
    },

    _formatDate: function(dateString) {
        var splitDateArray = dateString.split('-')
        var formattedDateString = splitDateArray.join('')
        var formattedDateNumber = parseInt(formattedDateString)
        return formattedDateNumber
    },

    _courtBool: function(courtInputArray) {

        var courtObj = {
            county: false,
            municipal: false,
            district: false
        }
        for(var i = 0; i < courtInputArray.length; i++) {
            var courtInputObj = courtInputArray[i]
            if(courtInputObj.checked) {
                var courtTrueValue = courtInputObj.value
            }
        }
        for(var prop in courtObj) {
            if(prop === courtTrueValue) {
                courtObj[prop] = true
            }
        }

        return courtObj
    },

    _handleSaveAndLogout: function(evt) {
        evt.preventDefault()
        this._handlePetitionSubmit(evt)

        ACTIONS._logoutUser()
    },

    _handleSubmitAndDestroy: function(evt) {
        evt.preventDefault()
        this._handlePetitionSubmit(evt)

        ACTIONS._destroyUser()
    },

    _handlePetitionSubmit: function(evt) {
        evt.preventDefault()

        ACTIONS._submitPetition({
            legal_name: document.getElementsByClassName('legalName')[0].value,
            dob: this._formatDate(document.getElementsByClassName('dob')[0].value),
            ssn: document.getElementsByClassName('ssn')[0].value,
            dl: document.getElementsByClassName('dl')[0].value,
            address: document.getElementsByClassName('currentAddress')[0].value,
            city: document.getElementsByClassName('currentCity')[0].value,
            state: document.getElementsByClassName('currentState')[0].value,
            county: document.getElementsByClassName('currentCounty')[0].value,
            zip: document.getElementsByClassName('currentZip')[0].value,
            sex: this._handleRadioInput(document.getElementsByClassName('gender')),
            race: this._handleRadioInput(document.getElementsByClassName('race')),
            offense_date:this._formatDate(document.getElementsByClassName('offenseDate')[0].value),
            offense_county: document.getElementsByClassName('arrestCounty')[0].value,
            arresting_agency: document.getElementsByClassName('arrestingAgency')[0].value,
            arrest_date: this._formatDate(document.getElementsByClassName('arrestDate')[0].value),
            a_address: document.getElementsByClassName('TOAAddress')[0].value,
            a_city: document.getElementsByClassName('TOACity')[0].value,
            a_state: document.getElementsByClassName('TOAState')[0].value,
            a_county: document.getElementsByClassName('TOACounty')[0].value,
            charged: this._handleRadioInput(document.getElementsByClassName('charged')),
            charge_date:this._formatDate(document.getElementsByClassName('chargeDate')[0].value),
            charged_offenses: document.getElementsByClassName('offenses')[0].value,
            charge_cause_number: document.getElementsByClassName('cause')[0].value,
            court_name: document.getElementsByClassName('courtName')[0].value,
            court_city: document.getElementsByClassName('courtCity')[0].value,
            court_county: document.getElementsByClassName('courtCounty')[0].value,
            county_court_at_law: this._courtBool(document.getElementsByClassName('court')).county,
            municipal_court: this._courtBool(document.getElementsByClassName('court')).municipal,
            district_court: this._courtBool(document.getElementsByClassName('court')).district,
            acquittal: this._handleRadioInput(document.getElementsByClassName('acquittal')),
            acquittal_date:this._formatDate(document.getElementsByClassName('acquittalDate')[0].value),
            dismissal: this._handleRadioInput(document.getElementsByClassName('dismiss')),
            dismissal_date:this._formatDate(document.getElementsByClassName('dismissDate')[0].value),
            convicted: this._handleRadioInput(document.getElementsByClassName('convicted')),
            conviction_date:this._formatDate(document.getElementsByClassName('convictionDate')[0].value),
            pardon:this._handleRadioInput(document.getElementsByClassName('pardon')),
            pardon_date:this._formatDate(document.getElementsByClassName('pardonDate')[0].value),
            overturned:this._handleRadioInput(document.getElementsByClassName('overturn')),
            overturned_date:this._formatDate(document.getElementsByClassName('overturnDate')[0].value),
            probation:this._handleRadioInput(document.getElementsByClassName('overturn')),
            deferred_adjudication:this._handleRadioInput(document.getElementsByClassName('adjudication')),
            user_id: parseInt(localStorage.currentUser)
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
                <form>
                    {/* PERSONAL PROFILE*/}
                    <h3 onClick={this._toggleProfileButton}>{this.state.profileButtonSymbol} Personal Profile</h3>
                    <div id = 'profile' className={toggleProfileClass.className}>
                        <p>Full legal name:</p><input type ='text' className = 'legalName'/>
                        <p>Date of birth:</p><input type = 'date' className = 'dob'/>
                        <p>Social Security Number (include dashes):</p><input type = 'password' className = 'ssn' />
                        <p>Driver's License (leave blank if not applicable):</p><input type = 'text' className = 'dl' />
                        <p>Race:</p>
                            <input type = 'radio' className = 'race' value = 'Hispanic or Latino' />Hispanic or Latino <br />
                            <input type = 'radio' className = 'race' value = 'American Indian or Alaska Native' />American Indian or Alaska Native <br />
                            <input type = 'radio' className = 'race' value = 'Asian' />Asian <br />
                            <input type = 'radio' className = 'race' value = 'Black or African American' />Black or African American <br />
                            <input type = 'radio' className = 'race' value = 'Native Hawaiian or Other Pacific Islander' />Native Hawaiian or Other Pacific Islander <br />
                            <input type = 'radio' className = 'race' value = 'White' />White <br />


                        <p>Gender:</p>
                            <input type = 'radio' value = 'male' className = 'gender' name = 'gender'/>Male<br/>
                            <input type = 'radio' value = 'female' className = 'gender' name = 'gender'/>Female

                        <div className = 'address'>Current address:
                            <input type = 'text' placeholder = 'address' className = 'currentAddress'/>
                            <input type = 'text' placeholder = 'city' className = 'currentCity'/>
                            <input type = 'text' placeholder = 'state' className = 'currentState'/>
                            <input type = 'text' placeholder = 'zipcode' className = 'currentZip'/>
                            <input type = 'text' placeholder = 'county' className = 'currentCounty'/>
                        </div>
                    </div>
                    {/* ARREST PROFILE*/}
                    <h3 onClick={this._toggleArrestButton}>{this.state.arrestButtonSymbol}Arrest</h3>
                    <div id = 'arrest' className={toggleArrestClass.className}>

                        <div className = 'address'>Address at time of the arrest:
                            <input type = 'text' placeholder = 'address' className = 'TOAAddress'/>
                            <input type = 'text' placeholder = 'city' className = 'TOACity'/>
                            <input type = 'text' placeholder = 'state' className = 'TOAState'/>
                            <input type = 'text' placeholder = 'zipcode' className = 'TOAZip'/>
                            <input type = 'text' placeholder = 'county' className = 'TOACounty'/>
                        </div>
                        <p>Date of the offense (may be different than the date of the arrest):</p><input type = 'date' className = 'offenseDate'/>
                        <p>Date of the arrest:</p><input type = 'date' className = 'arrestDate'/>
                        <p>Location of the arrest:
                            <input type = 'text' placeholder = 'city' className = 'arrestCity'/><br/>
                            <input type = 'text' placeholder = 'county' className = 'arrestCounty'/>
                        </p>
                        <p>Agency that arrested you:</p><input type = 'text' className = 'arrestingAgency'/>
                        <p>Arrest Offense (exactly as it is written on your record):</p><input type = 'text' className = 'arrestOffense' />
                    </div>

                    {/* CHARGE PROFILE*/}
                    <h3 onClick={this._toggleChargeButton}>{this.state.chargeButtonSymbol}Charge</h3>
                    <div id = 'charge' className={toggleChargeClass.className}>
                        <p>Charged:</p>
                            <input type = 'radio' className = 'charged' value = 'yes'/>Yes<br/>
                            <input type = 'radio' className = 'charged' value = 'no'/>No
                        <p>Date of charge:</p><input type = 'date' className = 'chargeDate'/>
                        <p>List all the offenses:</p>
                            <textarea placeholder = 'Offenses' className = 'offenses'></textarea>
                        <p>Court where charges were filed:</p>
                            County: <input type = 'text' className = 'courtCounty'/>
                            City: <input type = 'text' className = 'courtCity'/>
                            Name: <input type = 'text' className = 'courtName'/>
                        <p>Court Type:</p>
                            <input type = 'radio' className = 'court' value = 'county'/>County<br/>
                            <input type = 'radio' className = 'court' value = 'municipal'/>Municipal<br/>
                            <input type = 'radio' className = 'court' value = 'district'/>District

                        <p>Cause # (exactly as written on criminal history):</p><input type = 'text' className = 'cause' />

                    </div>

                    {/* OVERTURN PROFILE*/}
                    <h3 onClick={this._toggleOverturnButton}>{this.state.overturnButtonSymbol}Disposition</h3>
                    <div id = 'overturn' className={toggleOverturnClass.className}>
                        <p>Convicted:</p>
                            <input type = 'radio' className = 'convicted' value = 'yes' name = 'convicted'/>Yes<br/>
                            <input type = 'radio' className = 'convicted' value = 'no' name = 'convicted'/>No<br/>
                            <input type = 'date' className = 'convictionDate' />

                        <p>Dismissed:</p>
                            <input type = 'radio' className = 'dismiss' value = 'yes' name = 'dismiss'/>Yes<br/>
                            <input type = 'radio' className = 'dismiss' value = 'no' name = 'dismiss'/>No<br/>
                            <input type = 'date' className = 'dismissDate' />

                        <p>Pardoned:</p>
                            <input type = 'radio' className = 'pardon' value = 'yes' name = 'pardon'/>Yes<br/>
                            <input type = 'radio' className = 'pardon' value = 'no' name = 'pardon'/>No<br/>
                            <input type = 'date' className = 'pardonDate' />

                        <p>Overturned:</p>
                            <input type = 'radio' className = 'overturn' value = 'yes' name = 'overturn'/>Yes<br/>
                            <input type = 'radio' className = 'overturn' value = 'no' name = 'overturn'/>No<br/>
                            <input type = 'date' className = 'overturnDate' />

                        <p>Acquitted:</p>
                            <input type = 'radio' className = 'acquittal' value = 'yes' name = 'acquittal'/>Yes<br/>
                            <input type = 'radio' className = 'acquittal' value = 'no' name = 'acquittal'/>No<br/>
                            <input type = 'date' className = 'acquittalDate' />

                        <p>Assigned Probation:</p>
                            <input type = 'radio' className = 'probation' value = 'yes' name = 'probation'/>Yes<br/>
                            <input type = 'radio' className = 'probation' value = 'no' name = 'probation'/>No

                        <p>Assigned Deferred Adjudication:</p>
                            <input type = 'radio' className = 'adjudication' value = 'yes' name = 'adjudication' />Yes<br/>
                            <input type = 'radio' className = 'adjudication' value = 'no' name = 'adjudication'/>No
                    </div>
                    {/* AGENCY PROFILE*/}
                    <h3 onClick={this._toggleAgencyButton}>{this.state.agencyButtonSymbol}Agency</h3>
                    <div id = 'agency' className={toggleAgencyClass.className}>Address of arresting agency:
                        <input type = 'text' placeholder = 'address' className = 'agency'/>
                        <input type = 'text' placeholder = 'city' className = 'agency'/>
                        <input type = 'text' placeholder = 'state' className = 'agency'/>
                        <input type = 'text' placeholder = 'zipcode' className = 'agency'/>
                        <input type = 'text' placeholder = 'county' className = 'agency'/>
                    </div>

                    <p>ONCE YOU HIT SUBMIT YOUR FORMS WILL BE GENERATED AND EMAILED TO THE ADDRESS YOU PROVIDED. ALL INFORMATION WILL BE REMOVED FROM THIS SITE</p>
                    <button type= 'submit' onClick = {this._handleSubmitAndDestroy}>Submit</button>
                    <button type= 'submit' onClick = {this._handleSaveAndLogout}>Save and Logout</button>
                </form>
            </div>
        )
    }
})

export default DataInputView