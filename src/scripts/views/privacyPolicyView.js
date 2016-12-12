import React from 'react'
import Header from './header'
import Footer from './footer'

var PrivacyPolicyView = React.createClass({
	render: function() {
		return (
			<div className="body-container">
				<Header />
				<div className="privacy-policy">
					<h2>Privacy Policy</h2>
					<h4>What Information Do We Collect?</h4>
					<p> The bottom line is that the members of this open source project do not want to store, view, or manage any of your personally identifying information. We have no interest in your criminal/arrest history. What we do want to know is simple: 1) is our platform useful; and 2) is our platform working? The server we use writes logs of errors and server activity. Everytime a user signs up or creates a petition, the server assigns ID numbers to both users and petitions. So from that, we can approximate how mnay people are using the service.</p>
					<p>If something goes wrong, the error is logged. If you reach out and we are able to respond, doing so may require one of us to pull up your record. In doing so, we would be able to see whatever you have submitted. There really is not a way to get around that.</p>
					<p>Our idea is that once you download or are emailed the PDF containing the petition, order, and information, your account will be destroyed. Your user account will be deleted, along with the record you wrote to the database. Again, this is because we do not want to be storing personally identifiable information. </p>
					<h4>Website Use Information</h4>
					<p>Similar to other websites, our site may utilize a standard technology called "cookies" (see explanation below, "What Are Cookies?") and web server logs to collect information about how our website is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our website, and the sites visited just before and just after ours. This information is collected on an aggregate basis. None of this information is associated with you as an individual.</p>

					<h4>What Are Cookies?</h4>
					<p>Cookies are a feature of web browser software that allows web servers to recognize the computer used to access a website. Cookies are small pieces of data that are stored by a user's web browser on the user's hard drive. Cookies can remember what information a user accesses on one web page to simplify subsequent interactions with that website by the same user or to use the information to streamline the user's transactions on related web pages. This makes it easier for a user to move from web page to web page and to complete commercial transactions over the Internet. Cookies should make your online experience easier and more personalized.</p>
					<h4>How Do We Use Information Collected From Cookies?</h4>
					<p>We use website browser software tools such as cookies and web server logs to gather information about our website users' browsing activities, in order to constantly improve our website and better serve our users. This information assists us to design and arrange our web pages in the most user-friendly manner and to continually improve our website to better meet the needs of our users and prospective users.</p>
					<p>Cookies help us collect important business and technical statistics. The information in the cookies lets us trace the paths followed by users to our website as they move from one page to another. Web server logs allow us to count how many people visit our website and evaluate our website's visitor capacity. We do not use these technologies to capture your individual email address or any personally identifying information about you.</p>
					<h4>Notice of New Services and Changes</h4>
					<p>Occasionally, we may use the information we collect to notify you about important changes to our website, new services and special offers we think you will find valuable. As a user of our website, you will be given the opportunity to notify us of your desire not to receive these offers by clicking on a response box when you receive such an offer or by sending us an email request.</p>
					<h4>How Do We Secure Information Transmissions?</h4>
					<p>When you send confidential personal information to us on our website, a secure server software which we have licensed encrypts all information you input before it is sent to us. The information is scrambled en route and decoded once it reaches our website.</p>
					<p>Other email that you may send to us may not be secure unless we advise you that security measures will be in place prior to your transmitting the information. For that reason, we ask that you do not send confidential information such as Social Security, credit card, or account numbers to us through an unsecured email.</p>
					<h4>How Do We Protect Your Information?</h4>
					<p>Information Security -- We utilize encryption/security software to safeguard the confidentiality of personal information we collect from unauthorized access or disclosure and accidental loss, alteration or destruction.</p>
					<p>Evaluation of Information Protection Practices -- Periodically, our operations and business practices are reviewed for compliance with organization policies and procedures governing the security, confidentiality and quality of our information.</p>
					<p>Employee Access, Training and Expectations -- Our organization values, ethical standards, policies and practices are committed to the protection of user information. In general, our business practices limit employee access to confidential information, and limit the use and disclosure of such information to authorized persons, processes and transactions.</p>
					<h4>How Can You Access and Correct Your Information?</h4>
					<p>You may request access to all your personally identifiable information that we collect online and maintain in our database by emailing us using the contact form provided to you within the site structure of our website.</p>
					<h4>Do We Disclose Information to Outside Parties?</h4>
					<p>We may provide aggregate information about our customers, sales, website traffic patterns and related website information to our affiliates or reputable third parties, but this information will not include personally identifying data, except as otherwise provided in this privacy policy.</p>
					<h4>What About Legally Compelled Disclosure of Information?</h4>
					<p>We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights.</p>
					<h4>Permission to Use of Materials</h4>
					<p>The right to download and store or output the materials in our website is granted for the user's personal use only, and materials may not be reproduced in any edited form. Any other reproduction, transmission, performance, display or editing of these materials by any means mechanical or electronic without our express written permission is strictly prohibited. Users wishing to obtain permission to reprint or reproduce any materials appearing on this site may contact us directly.</p>
					<p>Source - Equal Justice Center</p>
				</div>
				<Footer />
			</div>
		)
	}
})

export default PrivacyPolicyView
