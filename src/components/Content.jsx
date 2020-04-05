import React from "react";
import Main from "./Main";
import Contacts from "./Contacts";
import Services from "./Services";
import { Route, BrowserRouter, NavLink } from "react-router-dom";
const Content = () => {
  return (
    <div className="Content">
      <BrowserRouter>
        <div className="Content-div">
          <NavLink to="/main">Главная</NavLink>
          <Route path="/main" component={Main} />
        </div>
        <div className="Content-div">
          <NavLink to="/services">Услуги</NavLink>
          <Route path="/services" component={Services} />
        </div>
        <div className="Content-div">
          <NavLink to="/contacts">Контакты</NavLink>
          <Route path="/contacts" component={Contacts} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default Content;
