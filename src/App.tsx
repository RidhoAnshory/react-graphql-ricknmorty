import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./components/CharacterList";
import { Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/" element={<CharacterList />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/:id" element={<CharacterDetail />}></Route>
      </Routes>
      {/* <CharacterList></CharacterList> */}
    </div>
  );
}

export default App;
