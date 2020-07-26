import React, { useState } from "react";
import "./styles.css";
import { Slider } from "../../components/Slider";
import { CustomButton } from "../../components/CustomButton";
import { useHistory } from "react-router-dom";

export const Simulation = () => {
  const [step, setStep] = useState(0);
  const navigation = useHistory();
  function handleContinue() {
    setStep(1);
  }
  function handleBack() {
    setStep(0);
  }
  return (
    <div className="container">
      <div className="step">
        <span className="actual">{step === 0 ? "01" : "02"}</span>
        <span>/03</span>
      </div>
      <span class="title">Faça a simulação do seu empréstimo</span>
      <div className="simulation">
        <span>
          {step === 0
            ? "Selecione o valor total desejado:"
            : "Selecione quanto quer pagar por mês"}
        </span>
        <div className="value">
          <span>R$</span>
          <h1>{step === 0 ? "5.500,00" : "250,00"}</h1>
        </div>

        <div className="slider">
          <Slider />
          <p className="label">
            Valor mínimo: {step === 0 ? "R$ 500,00" : "R$ 50,00"}
          </p>
        </div>
      </div>
      <div className="button">
        <CustomButton onClick={handleContinue}>
          {step === 0 ? "Avançar" : "Fazer simulação"}
        </CustomButton>
        {step === 1 ? <a onClick={handleBack}>Voltar</a> : ""}
      </div>
    </div>
  );
};
