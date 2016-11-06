import React from 'react'
import Header from './header'
import Footer from './footer'

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
            setClass: "untoggled",
            buttonSymbol: "+"
        }
    },

    _toggleProfileButton: function(){
        this.setState({
            setClass:this.state.buttonSymbol === '+' ? 'toggled' : 'untoggled',
            buttonSymbol: this.state.buttonSymbol === '+' ? '-' : '+'
        })
    },
    _toggleArrestButton: function(){
        this.setState({
            setClass:this.state.buttonSymbol === '+' ? 'toggled' : 'untoggled',
            buttonSymbol: this.state.buttonSymbol === '+' ? '-' : '+'
        })
    },

    render: function() {
        var toggleClass = {
            className: this.state.setClass,
        }
        return(
            <div className = 'petition'>
                <form>
                    {/* PERSONAL PROFILE*/}
                    <h3>Personal Profile</h3>
                    <div id = 'profile' className={toggleClass.className}>
                    <button onClick={this._toggleProfileButton}>{this.state.buttonSymbol}</button>
                        <p>What is your full legal name?</p><input type ='text'/>
                        <p>What is your date of birth?</p><input type = 'date'/>

                        <p>What is your race?</p>
                            <input type = 'radio' name = 'race' value = 'HoL' />Hispanic or Latino <br />
                            <input type = 'radio' name = 'race' value = 'AIoAN' />American Indian or Alaska Native <br />
                            <input type = 'radio' name = 'race' value = 'Asian' />Asian <br />
                            <input type = 'radio' name = 'race' value = 'BoAA' />Black or African American <br />
                            <input type = 'radio' name = 'race' value = 'NHoOPI' />Native Hawaiian or Other Pacific Islander <br />
                            <input type = 'radio' name = 'race' value = 'White' />White <br />


                        <p>What is your sex?
                            <input type = 'radio' name = 'sex'/>Male<br/>
                            <input type = 'radio' name = 'sex'/>Female
                        </p>

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
                    <h3>Arrest</h3>
                    <button onClick={this._toggleArrestButton}>{this.state.buttonSymbol}</button>
                    <div id = 'arrest' className={toggleClass.className}>
                        <p>Date of the arrest:</p><input type = 'date'/>
                        <p>Location of the arrest:
                            <input type = 'text' placeholder = 'city'/><br/>
                            <input type = 'text' placeholder = 'county'/>
                        </p>
                        <p>Agency who arrested you:</p><input type = 'text'/>
                        <p>Offense (exactly as it is written on your record):</p><input type = 'text' />
                    </div>

                    {/* CHARGE PROFILE*/}
                    <h3>Charge</h3>
                    <button onClick={this._toggleButton}>{this.state.buttonSymbol}</button>
                    <div className = 'charge' style={toggleClass}>
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
                    <h3>Disposition</h3>
                    <button onClick={this._toggleButton}>{this.state.buttonSymbol}</button>
                    <div className = 'overturn' style={toggleClass}>
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
                    <h3>Agency</h3>
                    <button onClick={this._toggleButton}>{this.state.buttonSymbol}</button>
                    <div className = 'agency' style={toggleClass}>Address of arresting agency:
                        <input type = 'text' placeholder = 'address'/>
                        <input type = 'text' placeholder = 'city' />
                        <input type = 'text' placeholder = 'state' />
                        <input type = 'text' placeholder = 'zipcode'/>
                        <input type = 'text' placeholder = 'county' />
                    </div>
                </form>
            </div>
        )
    }
})

export default DataInputView