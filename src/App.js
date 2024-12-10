import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';
import {LanguageProvider} from "./context/LanguageContext";
import MainSection from "./components/MainSection";
import i18n from "i18next";

const App = () => {
  return (
    <LanguageProvider>
      <h1>This site is not available at the moment</h1>
        {/*<Header />*/}
        {/*<MainSection/>*/}
        {/*<Gallery />*/}
        {/*<Footer />*/}
    </LanguageProvider>
  );
};

export default App;
