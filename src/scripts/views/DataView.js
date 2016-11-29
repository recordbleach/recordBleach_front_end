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

    _formatDate: function(dateString) {
        var splitDateArray = dateString.split('-')
        var formattedDateString = splitDateArray.join('')
        var formattedDateNumber = parseInt(formattedDateString)
        return formattedDateNumber
    },

    _createBool: function(answerString) {
        if(answerString === 'yes') {
            return true
        }
        else {
            return false
        }
    },

    _courtBool: function(courtInput) {
        var courtObj = {
            county: false,
            municipal: false,
            district: false
        }

        if(courtInput === 'county') {
            courtObj.county = true
        }
        else if(courtInput === 'municipal') {
            courtObj.municipal = true
        }
        else {
            courtObj.district = true
        }
        return courtObj
    },

    _handlePetitionSubmit: function(evt) {
        evt.preventDefault()

        ACTIONS._submitPetition({
            legal_name: evt.target.legalName.value,
            dob: this._formatDate(evt.target.dob.value),
            ssn: evt.target.ssn.value,
            dl: evt.target.dl.value,
            address: evt.target.currentAddress.value,
            city: evt.target.currentCity.value,
            state: evt.target.currentState.value,
            county: evt.target.currentCounty.value,
            zip: evt.target.currentZip.value,
            sex: evt.target.sex.value,
            race: evt.target.race.value,
            offense_date:this._formatDate(evt.target.offenseDate.value),
            offense_county: evt.target.arrestCounty.value,
            arresting_agency: evt.target.arrestingAgency.value,
            arrest_date:this._formatDate(evt.target.arrestDate.value),
            a_address: evt.target.arrestAddress.value,
            a_city: evt.target.arrestCity.value,
            a_state: evt.target.arrestState.value,
            a_county: evt.target.arrestCounty.value,
            charged: this._createBool(evt.target.charged.value),
            charge_date:this._formatDate(evt.target.chargeDate.value),
            charged_offenses: evt.target.offenses.value,
            charge_cause_number: evt.target.cause.value,
            court_name: evt.target.courtName.value,
            court_city: evt.target.courtCity.value,
            court_county: evt.target.courtCounty.value,
            county_court_at_law: this._courtBool(evt.target.court.value).county,
            municipal_court: this._courtBool(evt.target.court.value).municipal,
            district_court: this._courtBool(evt.target.court.value).district,
            acquittal: this._createBool(evt.target.acquittal.value),
            acquittal_date:this._formatDate(evt.target.acquittalDate.value),
            dismissal: this._createBool(evt.target.dismiss.value),
            dismissal_date:this._formatDate(evt.target.dismissDate.value),
            convicted: this._createBool(evt.target.convicted.value),
            conviction_date:this._formatDate(evt.target.convictionDate.value),
            pardon:this._createBool(evt.target.pardon.value),
            pardon_date:this._formatDate(evt.target.pardonDate.value),
            overturned:this._createBool(evt.target.overturn.value),
            overturned_date:this._formatDate(evt.target.overturnDate.value),
            probation:this._createBool(evt.target.probation.value),
            deferred_adjudication:this._createBool(evt.target.adjudication.value)
        })

    },

    _handleLogout: function() {

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
                        <p>Full legal name:</p><input type ='text' name = 'legalName'/>
                        <p>Date of birth:</p><input type = 'date' name = 'dob'/>
                        <p>Social Security Number (include dashes):</p><input type = 'password' name = 'ssn' />
                        <p>Driver's License (leave blank if not applicable):</p><input type = 'text' name = 'dl' />
                        <p>Race:</p>
                            <input type = 'radio' name = 'race' value = 'Hispanic or Latino' />Hispanic or Latino <br />
                            <input type = 'radio' name = 'race' value = 'American Indian or Alaska Native' />American Indian or Alaska Native <br />
                            <input type = 'radio' name = 'race' value = 'Asian' />Asian <br />
                            <input type = 'radio' name = 'race' value = 'Black or African American' />Black or African American <br />
                            <input type = 'radio' name = 'race' value = 'Native Hawaiian or Other Pacific Islander' />Native Hawaiian or Other Pacific Islander <br />
                            <input type = 'radio' name = 'race' value = 'White' />White <br />


                        <p>Sex:</p>
                            <input type = 'radio' value = 'male' name = 'sex'/>Male<br/>
                            <input type = 'radio' value = 'female' name = 'sex'/>Female

                        <div className = 'address'>Current address:
                            <input type = 'text' placeholder = 'address' name = 'currentAddress'/>
                            <input type = 'text' placeholder = 'city' name = 'currentCity'/>
                            <input type = 'text' placeholder = 'state' name = 'currentState'/>
                            <input type = 'text' placeholder = 'zipcode' name = 'currentZip'/>
                            <input type = 'text' placeholder = 'county' name = 'currentCounty'/>
                        </div>
                    </div>
                    {/* ARREST PROFILE*/}
                    <h3 onClick={this._toggleArrestButton}>{this.state.arrestButtonSymbol}Arrest</h3>
                    <div id = 'arrest' className={toggleArrestClass.className}>

                        <div className = 'address'>Address at time of the arrest:
                            <input type = 'text' placeholder = 'address' name = 'arrestAddress'/>
                            <input type = 'text' placeholder = 'city' name = 'arrestCity'/>
                            <input type = 'text' placeholder = 'state' name = 'arrestState'/>
                            <input type = 'text' placeholder = 'zipcode' name = 'arrestZip'/>
                            <input type = 'text' placeholder = 'county' name = 'arrestCounty'/>
                        </div>
                        <p>Date of the offense (may be different than the date of the arrest):</p><input type = 'date' name = 'offenseDate'/>
                        <p>Date of the arrest:</p><input type = 'date' name = 'arrestDate'/>
                        <p>Location of the arrest:
                            <input type = 'text' placeholder = 'city'/><br/>
                            <input type = 'text' placeholder = 'county' name = 'arrestCounty'/>
                        </p>
                        <p>Agency that arrested you:</p><input type = 'text' name = 'arrestingAgency'/>
                        <p>Arrest Offense (exactly as it is written on your record):</p><input type = 'text' name = 'arrestOffense' />
                    </div>

                    {/* CHARGE PROFILE*/}
                    <h3 onClick={this._toggleChargeButton}>{this.state.chargeButtonSymbol}Charge</h3>
                    <div id = 'charge' className={toggleChargeClass.className}>
                        <p>Charged:</p>
                            <input type = 'radio' name = 'charged' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'charged' value = 'no'/>No
                        <p>Date of charge:</p><input type = 'date' name = 'chargeDate'/>
                        <p>List all the offenses:</p>
                            <textarea placeholder = 'Offenses' name = 'offenses'></textarea>
                        <p>Court where charges were filed:</p>
                            County: <input type = 'text' name = 'courtCounty'/>
                            City: <input type = 'text' name = 'courtCity'/>
                            Name: <input type = 'text' name = 'courtName'/>
                        <p>Court Type:</p>
                            <input type = 'radio' name = 'court' value = 'county'/>County<br/>
                            <input type = 'radio' name = 'court' value = 'municipal'/>Municipal<br/>
                            <input type = 'radio' name = 'court' value = 'mistrict'/>District

                        <p>Cause # (exactly as written on criminal history):</p><input type = 'text' name = 'cause' />

                    </div>

                    {/* OVERTURN PROFILE*/}
                    <h3 onClick={this._toggleOverturnButton}>{this.state.overturnButtonSymbol}Disposition</h3>
                    <div id = 'overturn' className={toggleOverturnClass.className}>
                        <p>Convicted:</p>
                            <input type = 'radio' name = 'convicted' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'convicted' value = 'no'/>No<br/>
                            <input type = 'date' name = 'convictionDate' />

                        <p>Dismissed:</p>
                            <input type = 'radio' name = 'dismiss' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'dismiss' value = 'no'/>No<br/>
                            <input type = 'date' name = 'dismissDate' />

                        <p>Pardoned:</p>
                            <input type = 'radio' name = 'pardon' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'pardon' value = 'no'/>No<br/>
                            <input type = 'date' name = 'pardonDate' />

                        <p>Overturned:</p>
                            <input type = 'radio' name = 'overturn' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'overturn' value = 'no'/>No<br/>
                            <input type = 'date' name = 'overturnDate' />

                        <p>Acquitted:</p>
                            <input type = 'radio' name = 'acquittal' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'acquittal' value = 'no'/>No<br/>
                            <input type = 'date' name = 'acquittalDate' />

                        <p>Assigned Probation:</p>
                            <input type = 'radio' name = 'probation' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'probation' value = 'no'/>No

                        <p>Assigned Deferred Adjudication:</p>
                            <input type = 'radio' name = 'adjudication' value = 'yes'/>Yes<br/>
                            <input type = 'radio' name = 'adjudication' value = 'no'/>No
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
                    <button type = 'submit' value = 'submit' name = 'submit'>Submit</button>
                </form>
                <button onClick = {this._handleLogout}>Logout</button>
            </div>
        )
    }
})

export default DataInputView