import React from "react";
import logo from "../images/tableau.png";
import gitHubLogo from "../images/github.svg";
//public / static / images / tableau.png
import axios from 'axios';

export default function Home() {

  const callLoginAPI = () => {
    axios.post('https://10ax.online.tableau.com/api/3.4/auth/signin', {"credentials": {
      "personalAccessTokenName": "clair",
      "personalAccessTokenSecret": "ANFa3RPAQlS7d8MOnyXP1w==:hlcdhTy6uCp8KDON8IpBFbs60K06hl1T",
      "site": {
        "contentUrl": "clairtableau"
      }
    }}, {headers: {'content-type': 'application/json',  proxy: {
      protocol: 'https',
      host: '10ax.online.tableau.com',
      auth: {
        username: 'shridhar.ingale@clairvoyantsoft.com',
        password: 'j9a0xzra3z@A'
      }
    }}})
      .then(function (response) {
        // handle success
        console.log("response", response);
      })
      .catch(function (error) {
        // handle error
        console.log("error", error);
      })
      .finally(function () {
        // always executed
      });

  }


  return (
    <div>
      <img src={logo} alt="tableauImage" />
      <h1>React Playground for Tableau JavaScript API</h1>
      {/* <button onClick={callLoginAPI}>login</button> */}
      {/* <p>by Andre de Vries</p> */}
      {/* <p style={indicatorStyle}>👇</p>
      <a href="https://github.com/andre347/tableau-react-jsapi" target="_blank">
        {" "}
        <img id="githubLink" src={gitHubLogo} style={githubStyle} alt="github logo" />
      </a> */}
    </div>
  );
}

const githubStyle = {
  width: "50px",
  height: "50px"
};

const indicatorStyle = {
  fontSize: "3rem",
  width: "100%",
  textAlign: "center"
};
