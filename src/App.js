import React from 'react';
import Row from './Row';
import requests from './requests';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Netflix clone</h1>
      <Row  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
