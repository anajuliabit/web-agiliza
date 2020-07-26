import React from "react";
import { Slider } from "../../../components/Slider";
import { CustomButton } from "../../../components/CustomButton";
import "./styles.css";

export const Result = () => {
 
  return (
    <div className="container">
      <span className="title">Este é o resultado prévio da sua simulação:</span>
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
          <h1>9.769,80</h1>
        </div>
      </div>
      <div className="button">
        <CustomButton >Quero continuar</CustomButton>
      </div>
    </div>
  );
};
