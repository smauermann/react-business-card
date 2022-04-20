import React from 'react';

import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

// separate components for:
// * info (photo, name, buttons)
// * about
// * interests
// * footer (social icons)

function App() {
  return (
    <div className="app">
      <Info />
      <div className="padded">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
