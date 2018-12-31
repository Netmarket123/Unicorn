import React from 'react';
import './App.css';
import { NavMenu } from '../src/containers/menu/NavMenu';
import { Layout } from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { TopBar } from './components/topbar/TopBar';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons("https://static2.sharepointonline.com/files/fabric/assets/icons/");

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <TopBar />
        <NavMenu />
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
