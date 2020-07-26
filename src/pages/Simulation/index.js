import React, { useState } from "react";
import "./styles.css";
import { Slider } from "../../components/Slider";
import { CustomButton } from "../../components/CustomButton";
import { useHistory } from "react-router-dom";

export const Simulation = () => {
  const navigation = useHistory();
  function handleContinue() {
    navigation.push("/simulation");
  }
  return (
    <div className="container">
      <div className="step">
        <span className="actual">01</span>
        <span>/03</span>
      </div>
      <span class="title">Faça a simulação do seu empréstimo</span>
      <div className="simulation">
        <span>Selecione o valor total desejado:</span>
        <div className="value">
          <span>R$</span>
          <h1> 5.500,00</h1>
        </div>

        <div className="slider">
          <Slider />
          <p className="label">Valor mínimo: R$ 500,00 </p>
        </div>
      </div>
      <div className="button">
        <CustomButton onClick={handleContinue}>Avançar</CustomButton>
      </div>
    </div>
  );
};
