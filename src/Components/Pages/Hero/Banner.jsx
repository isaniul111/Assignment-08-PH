import React from "react";

import Hero from "./Hero";
import Content from "./Content";
import Tradingapps from "../TradingApps/Tradingapps";
const Banner = ({datas}) => {
  return (
    <div>
        <Hero></Hero>
        <Content></Content>
        <Tradingapps datas={datas}></Tradingapps>
    </div>
  );
};

export default Banner;
