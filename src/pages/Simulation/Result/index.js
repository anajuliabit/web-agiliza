import React from "react";
import { Slider } from "../../../components/Slider";
import { CustomButton } from "../../../components/CustomButton";
import "./styles.css";
import { auth } from "../../../services/api";

export const Result = () => {
  function handleContinue() {
    auth().then((result) => {
      window.location = result.data;
    });
  }

  return (
    <div className="container">
      <span className="title2">
        Este é o resultado prévio da sua simulação:
      </span>
      <div className="simulation">
        <span>Valor desejado:</span>
        <div className="value">
          <span>R$</span>
          <h1>5.500,00</h1>
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
      <div className="simulation">
        <span>Valor da parcela mensal:</span>
        <div className="value">
          <span>R$</span>
          <h1>250,00</h1>
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
      <div className="result">
        <span>Valor total a ser pago:</span>
        <div className="total-value">
          <span>R$</span>
          <span className="value">9.769,80</span>
        </div>
      </div>
      <div className="cards"></div>
      <div className="button">
        <CustomButton >Quero continuar</CustomButton>
      </div>
    </div>
  );
};
