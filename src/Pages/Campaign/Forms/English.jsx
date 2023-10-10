import React from "react";
import { Helmet } from "react-helmet";


export const EngBody = () => (
  <>
  <h2>Build the movement</h2>
    <p>
      Our strength comes from our solidarity. The more of us who take action —
      across borders and industries — the more we can show the decision makers,
      bosses and the world our collective power.
      <br />
      <br />
      We are global community of activists campaigning for transport workers'
      rights and social justice. Do you want to take part in campaign actions
      and respond to emerging issues as they break? Then join the ITF global
      activist community by filling in the contact form.
    </p>
  </>
);

export const English = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v5/form/20-million-people-150-countries-one-global-movement-fighting-for-transport-workers-rights?format=js&source=widget"></script>
      </Helmet>

      <div
        id="can-form-area-20-million-people-150-countries-one-global-movement-fighting-for-transport-workers-rights"
        style={{ width: "100%" }}
      ></div>
    </>
  );
};
