import React from "react";
import "./App.css";
import Connexion from "./Pages/Connexion";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inscription from "./Pages/Inscription";
import Accueil from "./Pages/Accueil";
import Panier from "./Pages/Panier";
import Commande from "./Pages/Commande";

function App() {
  return <>
    <BrowserRouter>

      <Routes>
        <Route element={
          <Connexion />
        } path={"/"} />
        <Route element={<Inscription />} path="/inscription" />
        <Route element={<Accueil />} path="/accueil" />
        <Route element={<Panier />} path="/panier" />
        <Route element={<Commande />} path="/commande" />
      </Routes>


    </BrowserRouter>
  </>
}

export default App;
