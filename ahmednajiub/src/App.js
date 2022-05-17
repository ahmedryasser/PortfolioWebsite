import { Fragment, useEffect, Switch } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import Minesweeper from "./Main/Sections/Projects/Minesweeper/Minesweeper";

import "./App.scss";
import "./extensions.jsx";

function App() {
  document.title = "Ahmed Najiub"
  return (
    <Fragment>
      <BrowserRouter>
        <Scroller />
        <Navigation />
        <Routes>
          <Route path={"/"} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
function Scroller() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let el = document.querySelector(location.hash);
      if (el) el.scrollIntoView();
    }
  }, [location.key]);
  return <></>;
}

export default App;
