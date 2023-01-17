import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import HubspotForm from "react-hubspot-form"
import { Seo } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import "./contact.scss"

export default function Contact() {
    return (
        <>
            <Seo
                title="Contacto"
                description="Esta es una pagina con un formulario de consulta para obtener informacion sobre los pueblos originarios"
                keywords="Contacto, Formulario, Consulta" />
            <Page>
                <div className="container">
                    <div className="row contact">
                        <div className="col-12 col-md-6 py-2 m-auto paddingGlobal">
                            <h1>Hablemos!</h1>
                            <h4>Contactanos el cafe corre por nuestra cuenta :)</h4>
                            <div className="contactImage">
                                <StaticImage src="../../content/images/Coffee.png" layout="constrained" width={150}
                                />
                            </div>

                        </div>
                        <div className="col-12 col-md-6 justify-content-center py-2 m-auto form">
                            <div className="hubspot-form-wrapper">
                                <HubspotForm portalId="20579939" formId="8ebe8cc3-de77-4c65-85a1-8506ddda09ca" loading={<div>Loading...</div>} />
                            </div>
                        </div>
                    </div>

                </div>
            </Page>
        </>
    )
}
