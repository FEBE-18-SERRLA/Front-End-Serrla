import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { getAllPortfolios } from "Redux/Actions/portfolios";
import { getAllUsers } from "Redux/Actions/user";
import CardPortfolio from "../../Components/CardPortfolio/CardPortfolio";

import "./Portfolio.css";

const Portfolio = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.portfolios.portfolios);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  useEffect(() => {
    dispatch(getAllPortfolios());
    dispatch(getAllUsers());
  }, []);

  const nameUser = user?.map((item) => item.first_name + " " + item.last_name);
  const imageProfile = user?.map((item) => item.picture);

  return (
    <>
      {data.map((item) => {
        return (
          <CardPortfolio
            key={item.id}
            name={nameUser}
            imageProfile={imageProfile}
            media={item.media}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </>
  );
};

export default Portfolio;
