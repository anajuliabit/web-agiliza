import React from "react";
import { CustomButton } from "../../components/CustomButton";
import logo from "../../assets/small-logo.svg";
import "./styles.css";
import { useHistory } from "react-router-dom";

export const Authentication = (props) => {
  const navigation = useHistory();

  function handleClick() {}
  return (
    <div className="response">
      <img src={logo} className="logo" alt="logo" />
      <div>
        <h1>Uhull!</h1>
        <h1 className="accept">Seu empréstimo foi aceito.</h1>
      </div>
      <span className="description">
        Agora você pode conferir o andamento do seu empréstimo, as próximas
        faturas e o seu status.
      </span>
      <CustomButton onClick={handleClick}>Ver meu empréstimo</CustomButton>
    </div>
  );
};
