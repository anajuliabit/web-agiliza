import React from "react";
import "./styles.css";

export const User = () => {


  return (
    <div className="userContainer">
        <header>
        <h1>Olá, Jéssica!</h1>
        <div className="iconUser"></div>
        <p>Veja mais sobre seu empréstimo:</p>
        </header>
        <section>
            <main className="wrapper">
                    <div className="first">
                        <h4>Valor do seu empréstimo</h4>
                        <div>     <i>R$</i><bold>5.5000</bold></div>
                   
                    </div>
                    <div className="groupWrapper">
                        <div>
                            <h4>Valor total 
                            a ser pago:</h4>
                        
                                 <div>     <i>R$</i><bold>9.769,80</bold></div>
                        </div>
                        <div>
                     
                            <h4>Quanto foi pago:</h4>
                        
                                  <div>   
                                        <i>R$</i><bold>3.500,54</bold>
                                  </div>
                        </div>
                    
                   
                        <div>
                            <h4>Quando ainda
falta pagar:</h4>
                        
                        <div>     <i>R$</i><bold>6.269,26</bold></div>
                        </div>
                  
                     
                        <div>
                            <h4>Status do
andamento:</h4>
                        
                        <div>     <bold style={{fontSize:"27px"}}>20%</bold><br/><i style={{fontSize:"20px"}}>conclusão</i></div>
                        </div>
                
                    </div>
            </main>
           
        </section>
        
    </div>
   
  );
};

export default User;