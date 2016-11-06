import React from 'react'
import Header from './header'

var GlossaryView = React.createClass({
	render: function() {
		return (
			<header>
			</header>
			<div className="terms">
				<h3>Glossary</h3>
				<p><b>Arresting Agency</b> - There are 92 different agencies that can arrest you in Harris County. You can find which one placed you under arrest in your criminal record in the Harris County District Clerk database.</p>
				<p><b>DPS Tracking Number</b> - Referred to as an SPN in the Harris County system, this number allows you to track your case and locate files related to your charges.</p>
				<p><b>Class C Misdemeanor</b> - The lowest level of criminal offense in Texas. Maximum Penalty: $500, cannot be sentenced to jail time as punishment. However, you can be arrested for a Class C Misdemeanor (Atwater v. City of Lago Vista).</p>
				<p><b>Class A Misdemeanor</b> - Punishable up to one year in jail and/or a fine not to exceed $4000; up to two years community supervision. Class B: examples includes marijuana possession up to two ounces or first-offense DWI; punishable by fine of up to $2000, up to 180 days in jail or both.</p>
				<p><b>Class B Misdemeanor</b> - Includes first-offense driving while intoxicated and possession of up to two ounces of marijuana. A class B misdemeanor in Texas is punishable by a fine of up to $2000, up to 180 days in jail or both</p>
				<p><b>Felony</b> - a crime that is punishable by death or minimum sentence of one year in state/federal prison</p>
				<p><b>Statute of Limitations</b> - These are laws that set the maximum amount of time in which legal proceedings can move forward. You may not get your record expunged if the statute of limitations has not passed.</p>
				<p><b>Dismissed or Quashed</b> - Dismissal: A judge may throw out, or dismiss, your case if they feel there is a lack of sufficient evidence to properly prosecute. Quash: To overthrow; to annul; to make void or declare invalid.</p>
				<p><b>Acquittal</b> - Found or declared not guilty in a court of law</p>
				<p><b>Custodial Arrest</b> - You were taken into custody and processed</p>
				<p><b>Non-Custodial Arrest</b> - You were not taken into custody. This could be a stop and search or be given a ticket for getting into a car wreck, given a ticket and failing to appear.</p>
			</div>
		)
	}
})

export default GlossaryView