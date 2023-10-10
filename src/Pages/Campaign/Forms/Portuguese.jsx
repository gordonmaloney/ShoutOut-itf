import React from "react";
import { Helmet } from "react-helmet";

export const PtBody = () => (
  <>
    <h2>Comstruir o movimento</h2>
    <p>
      Nossa força vem da solidariedade. Quanto mais pessoas agirem — além das
      fronteiras e setores — mais poderemos mostrar aos tomadores de decisão,
      aos chefes e ao mundo nosso poder coletivo.
      <br />
      <br />
      Somos uma comunidade global de ativistas que fazem campanha pelos direitos
      dos trabalhadores em transportes e pela justiça social.
      <br />
      <br />
      Você quer participar de iniciativas de campanha e enfrentar questões
      emergentes assim que elas surgirem?
      <br />
      <br />
      Então, junte-se à comunidade global de ativistas da ITF preenchendo o
      formulário de contato.
    </p>
  </>
);

export const Portuguese = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v5/form/handraiser-web-pt?format=js&source=widget"></script>{" "}
      </Helmet>

      <div id="can-form-area-handraiser-web-pt"></div>
    </>
  );
};
