import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";

export const Home = () => {
  const navigation = useHistory();
  function handleLoan() {
    navigation.push("/simulate");
  }
  function handleInvest() {
    navigation.push("/invest");
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <div className="item slide1">
          <img src={logo} className="logo" alt="logo" />
          <h1>Um novo jeito de realizar seus sonhos.</h1>
        </div>
        <div className="item slide2">
          <img src={logo} className="logo" alt="logo" />
          <p>Pra quem quer empréstimo:</p>
          <h1>A gente empresta.</h1>
        </div>
        <div className="item slide3">
          <img src={logo} className="logo" alt="logo" />
          <p>
            Pra quem <br></br>quer investir:
          </p>
          <h1>A gente também investe.</h1>
        </div>
        <div className="item slide4">
          <img src={logo} className="logo" alt="logo" />
          <h1>Empréstimo de pessoa para pessoa:</h1>
          <p>No fim, todos saem ganhando.</p>
        </div>
      </Carousel>
      <div className="content">
        <CustomButton onClick={handleLoan}>
          Quero pedir um empréstimo
        </CustomButton>
        <CustomButton onClick={handleInvest}>Quero investir</CustomButton>
      </div>
    </div>
  );
};
