import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function Sample2(props) {

  const [url] = useState(
    "https://prod-useast-a.online.tableau.com/t/clairtest/views/ClairDashboard/Sheet1?:origin=card_share_link&:embed=n"
  );
  const ref = useRef(null);
  const options = {
    "hideToolbar": true
  }
  const initViz = () => {
    new tableau.Viz(ref.current, url, options);
  };

  useEffect(initViz, []);

  return (
    <div style={setVizStyle} ref={ref} >
    </div>
  );
}

const setVizStyle = {
  width: "1200px",
  height: "500px",
};

export default Sample2;
