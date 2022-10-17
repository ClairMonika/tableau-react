import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function Sample(props) {
  
  const [url] = useState(
    "https://10ax.online.tableau.com/t/clairtableau/views/sheet1/Dashboard1"
  );
  const ref = useRef(null);
  const options = {
    "hideToolbar": true,
    "height":"900px",
    "width":"1300px",
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

export default Sample;
