import React from 'react'
import Header from './header'
import Footer from './footer'

var DisclaimerView = React.createClass({
	render: function() {
		return (
			<div className="body-container">
				<Header />
				<div className="disclaimer-container">
				<h3>Disclaimer</h3>
				<p><b>Information, Not Legal Advice.</b> We provide the information on this website as a public service. Sometimes the laws change. We cannot promise that this information is always up-to-date and correct.</p>
				<p>We do not intend this information to be legal advice. By providing this information, we are not acting as your lawyer. If you need legal advice, you should contact a lawyer through your local legal aid organization or the State Bar of Texas by calling their lawyer referral hotline at (800) 252-9690.  Always talk to a competent lawyer, if you can, before taking legal action.</p>
				<p><b>FREE, Not for Sale:</b> The information and forms available on this website are free. They are not for sale.  By using this website, you agree not to sell or make a profit in any way from any information or forms that you obtained through this website.</p>
				<p><b>Lawyer Advertising.</b> This website is not intended to be advertising or solicitation. The hiring of a lawyer is an important decision that should not be based on advertisements. Before hiring an attorney, you should investigate his or her reputation and qualifications.</p>
				<p><b>Links.</b>  Some of the items listed here have not been prepared by us, but are instead "links" to information prepared and posted by others. We cannot guarantee the accuracy of information posted on other sites. The links are not intended to imply that we sponsor or are affiliated or associated with the persons who created those sites, nor are the links intended to imply that we are legally authorized to use any trade name, registered trademark, logo, legal or official seal, or copyrighted symbol that may be reflected in the links.</p>
				<p><b>E-mail.</b> Viewing this web site, or transmitting an e-mail message through this web site, does not create an attorney-client relationship. Sending e-mail to an attorney mentioned in this site does NOT create an attorney-client relationship between you and the attorney. Unless you are already a client of the attorney, your e-mail may NOT be protected by the attorney-client privilege. Moreover, unless it is encrypted, e-mail can be intercepted by persons other than the recipient.</p>
				<p>Deadlines are extremely important in most legal matters. You may lose important legal rights if you do not obtain an attorney immediately to advise you. Many people do not check their e-mail daily, and some attorneys do not respond to unsolicited e-mail from non-clients.</p>
				</div>
				<div className="disclaimer-espanol">
				<h3>Espanol</h3>
				<p><b>Denegación de Responsabilidad</b></p>
				<p><b>Información, no consejo legal.</b> Proveemos esta información en este sitio web como un servicio público. Hay veces, las leyes cambian. No podemos prometer que esta información siempre este al día y correcta.</p>
				<p>No tenemos la intención que esta información sea un consejo legal. Al proveer esta información, no estamos actuando como su abogado. Si necesita un consejo legal, usted debería contactar a un abogado por medio de su organización de asistencia legal local o al State Bar of Texas si llama a la línea directa que ayuda a encontrar a un abogado al (800) 252-969. Siempre hable con un abogado competente, si es posible, antes de tomar acción legal.</p>
				<p><b>Gratis, no a la venta:</b> La información y formularios disponibles en este sitio web son gratis. No están de venta. Al usar este sitio web, usted acepta no vender u obtener ganancias monetarias de ninguna manera de la información o formularios que obtenga por medio de este sitio web.</p>
				<p><b>Publicidad de Abogados.</b> Este sitio web no está destinado para publicidad o solicitaciones. El contratar un abogado es una decisión importante que no se debe basar en publicidad. Antes de contratar a un abogado, usted debe investigar la reputación y habilidad de dicho abogado.</p>
				<p><b>Enlaces.</b> Algunos de los artículos que se ven aquí no han sido preparados por nosotros mismos, sino son “enlaces” a información preparados y expuesta por otros. No podemos garantizar la exactitud de la información expuestos en otros sitios.  Los enlaces no deben insinuar que patrocinamos o estamos afiliados o asociados con las personas que crearon los sitios, ni tampoco los enlaces deben insinuar que nosotros estamos legalmente autorizados a usar los nombres comerciales, las marcas registradas, logos, sellos oficiales o legales, o símbolos con derechos de autor que pudiera reflejarse en los enlaces.</p>
				<p><b>Correo Electrónico.</b> El ver este sitio web, o que se le transmita un correo electrónico por medio de este sitio web, no crea una relación de abogado-cliente.El mandar un correo electrónico a un abogado mencionado en este sitio NO crea una relación de abogado-cliente entre usted y el abogado. Al menos que usted ya es un cliente del abogado, su correo electrónico pudiera NO ser protegido por la confidencialidad de la relación entre el abogado y el cliente. Por otra parte, a menos que este encriptado, el correo electrónico pudiera ser interceptado por otras personas además de su recipiente.</p>
				<p>En asuntos legales, los plazos son muy importantes. Usted pudiera perder derechos legales muy importantes si usted no obtiene a un abogado que lo/la aconseje. Muchas personas no revisan su correo electrónico diariamente, y algunos abogados no responden a correos electrónicos no solicitados de personas que no son sus clientes.</p>
				</div>
				<Footer />
			</div>
			)
	}
})

export default DisclaimerView