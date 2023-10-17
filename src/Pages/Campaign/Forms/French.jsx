import React from "react";
import { Helmet } from "react-helmet";

export const FrBody = () => (
  <>
    <h2>Construire une communauté mondiale</h2>
    <p>
      Notre solidarité est notre force. Plus nous serons nombreux à agir —
      par-delà les frontières géographiques et sectorielles — et plus les
      décisionnaires, les employeurs et le monde tout entier prendront
      conscience de notre pouvoir collectif.
      <br />
      <br />
      Nous sommes une communauté mondiale d’activistes : nous défendons les
      droits des travailleurs et la justice sociale.
      <br />
      <br />
      Vous souhaitez participer aux campagnes et vous atteler à trouver des
      solutions aux nouveaux problèmes à mesure qu’ils se présentent ?
    </p>
  </>
);

export const French = () => {
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

      <div id="can-form-area-handraiser-web-fr"></div>
    </>
  );
};
