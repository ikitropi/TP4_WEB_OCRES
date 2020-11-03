    import React, { Component } from 'react';

    import ReactDOM from 'react-dom';
    import './index.css';



    // On va chercher les différents éléments de notre page
    const pages = document.querySelectorAll(".page")

    // On attend le chargement de la page
    window.onload = () => {
        // On affiche la 1ère page du formulaire
        document.querySelector(".page").style.display = "initial"
        
        let boutons = document.querySelectorAll(".jeanne")
        for(let bouton of boutons){
            bouton.addEventListener("click", jeanne)
        }

        boutons = document.querySelectorAll(".martine")
        for(let bouton of boutons){
            bouton.addEventListener("click", martine)
        }

        boutons = document.querySelectorAll(".claude")
        for(let bouton of boutons){
            bouton.addEventListener("click", claude)
        }

        boutons = document.querySelectorAll(".claude")
        for(let bouton of boutons){
            bouton.addEventListener("click", claude)
        }

         boutons = document.querySelectorAll(".style")
        for(let bouton of boutons){
            bouton.addEventListener("click", style)
        }
        


    }


    function jeanne(){
        document.getElementById("page2").setAttribute("style","display:none");
        document.getElementById("page3").setAttribute("style","display:none");

        document.getElementById("page1").setAttribute("style","display:block");

        ReactDOM.render(
          <p>Nom: jjjjjj</p>,
          document.getElementById('nom1')
        );

        ReactDOM.render(
          <p>Prenom: jeanne</p>,
          document.getElementById('prenom1')
        );

    }

    function martine(){

        document.getElementById("page3").setAttribute("style","display:none");
        document.getElementById("page1").setAttribute("style","display:none");

        document.getElementById("page2").setAttribute("style","display:block");

         ReactDOM.render(
      <p>prenom: martine</p>,
      document.getElementById('prenom2')
    );

    ReactDOM.render(
      <p>Nom: mmmmmm</p>,
      document.getElementById('nom2')
    );
    }

    function claude(){
        // On masque toutes les pages
        document.getElementById("page1").setAttribute("style","display:none");
        document.getElementById("page2").setAttribute("style","display:none");

        document.getElementById("page3").setAttribute("style","display:block");


    ReactDOM.render(
      <p>Prenom: claude</p>,
      document.getElementById('prenom3')
    );

    ReactDOM.render(
      <p>Nom: ccccc</p>,
      document.getElementById('nom3')
    );
    }



    class App extends React.Component {
      constructor(props) { 
        super(props); 
        return (
          <div className="App">
            <div id="nom1"></div>
            <div id="prenom1"></div>
            <div id="nom2"></div>
            <div id="prenom2"></div>
            <div id="nom3"></div>
            <div id="prenom3"></div>
          </div>
        );
      }
    }

  function style(){
   document.body.style.backgroundImage = "url('tree.jpg')";
  }


