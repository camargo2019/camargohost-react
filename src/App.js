import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/home/Home';
import Hospedagem from './pages/hospedagem/Hospedagem';
import Streaming from './pages/streaming/Streaming';
import Vps from './pages/vps/Vps';
import MultiTheftAuto from './pages/mta/MultiTheftAuto';
import './App.css';
import {
  Locations,
  Location,
  NotFound
} from "react-router-component";

function App() {
  return (
      <div>
        <Locations>

          <Location path="/" handler={Home} />

          <Location path="/hospedagem" handler={Hospedagem} />

          <Location path="/streaming" handler={Streaming} />

          <Location path="/vps" handler={Vps} />

          <Location path="/mta" handler={MultiTheftAuto} />

          <NotFound handler={Home} />

        </Locations>
      </div>
  );
}

export default App;
