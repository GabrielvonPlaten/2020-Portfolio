import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Work } from './Components/Work/Work';
import { Footer } from './Components/Footer/Footer';
import { Github } from './Components/Github/Github';

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Work />
      <Github />
      {/* ------- */}
      <Footer />
    </div>
  );
};

export default App;
