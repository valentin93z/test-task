import React from "react";
import { Route, Routes } from "react-router-dom";
import TableWrapV1 from "./components/TableWrap/TableWrapV1";
import TableWrapV2 from "./components/TableWrap/TableWrapV2";
import TicketsOnEvent from "./components/TicketsOnEvent/TicketsOnEvent";
import CardsList from "./components/Cards/CardsList";
import RouteSelection from "./components/Route/RouteSelection";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardsList/>} />
        <Route path="/table-wrap-v1" element={<TableWrapV1/>} />
        <Route path="/table-wrap-v2" element={<TableWrapV2/>} />
        <Route path="/tickets-on-event" element={<TicketsOnEvent/>} />
        <Route path="/route" element={<RouteSelection/>} />
      </Routes>
    </div>
  );
}

export default App;