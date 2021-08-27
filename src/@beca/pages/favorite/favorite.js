import React from "react";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import OfertList from "../../shared/components/UI/organisms/ofert-list";
import { Helmet } from "react-helmet-async";

const objNav = {
  name: "Favoritos",
  path: "/favorites",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function Favorite() {
  return (
    <>
      <Helmet>
        <title> Favoritos | Beca tu futuro</title>
      </Helmet>
      <Header2Natigation name="Favoritos" objNav={objNav}>
        <div className="container mx-auto mb-4">
          <OfertList justFavorites />
        </div>
      </Header2Natigation>
    </>
  );
}
