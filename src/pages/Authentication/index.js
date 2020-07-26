import React, { useEffect } from "react";
import { CustomButton } from "../../components/CustomButton";
import logo from "../../assets/small-logo.svg";
import "./styles.css";

export const Authentication = (props) => {
  function handleClick() {
    const paramsString = props.location.search;
    console.log(props.location.search);
    const params = new URLSearchParams(paramsString);
    const tags = params.get("code");
    console.log(tags);
  }
  return (
    <div className="response">
      <img src={logo} className="logo" alt="logo" />
      <div>
        <h1>Uhull!</h1>
        <h1 className="accept">Seu empréstimo foi aceito.</h1>
      </div>
      <span class="description">
        Agora você pode conferir o andamento do seu empréstimo, as próximas
        faturas e o seu status.
      </span>
      <CustomButton onClick={handleClick}>Ver meu empréstimo</CustomButton>
    </div>
  );
};
