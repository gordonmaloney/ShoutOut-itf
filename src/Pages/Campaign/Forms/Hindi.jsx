import React from "react";
import { Helmet } from "react-helmet";

export const EsBody = () => (
  <>
    <h2>Construir el movimiento</h2>
    <p>
      Nuestra fuerza es fruto de nuestra solidaridad. Cuantos más nos
      movilicemos por encima de las fronteras y en todos los sectores, mejor
      mostraremos nuestro poder colectivo a las instancias decisorias, a las
      patronales y al mundo.
      <br />
      <br />
      Somos una comunidad mundial de activistas que defiende los derechos de los
      trabajadores y las trabajadoras del transporte y la justicia social.
      <br />
      <br />
      ¿Desea participar en acciones de campaña dirigidas a hacer frente a los
      problemas a medida que vayan surgiendo?
      <br />
      <br />
      ¡Únase a la comunidad mundial de activistas de la ITF! Basta rellenar el
      formulario de contacto.
    </p>
  </>
);

export const Spanish = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v5/form/handraiser-web-es?format=js&source=widget"></script>{" "}
      </Helmet>

      <div id="can-form-area-handraiser-web-es"></div>
    </>
  );
};
