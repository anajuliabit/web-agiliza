import React, { useEffect } from "react";
import { getToken } from "../../services/api";
import { useHistory } from "react-router-dom";
import "./styles.css";

export const Loading = (props) => {
  const navigation = useHistory();
  const paramsString = props.location.search;

  useEffect(() => {
    const code = new URLSearchParams(paramsString).get("code");
    getToken(code).then(() => {
      setTimeout(() => {
        navigation.push("/auth/finished");
      }, 3000);
    });
  }, [navigation, paramsString]);
  return (
    <div className="loading">
      <img src={require("../../assets/agiliza.gif")} alt="Logo" />
      <span>Estamos analisando os seus dados...</span>
    </div>
  );
};
