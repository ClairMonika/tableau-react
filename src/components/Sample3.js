import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function Sample(props) {
 
  const [url] = useState(
    "https://prod-useast-a.online.tableau.com/t/clairtest/views/Superstore/Customers?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
  );
  const ref = useRef(null);
  const options = {
    "hideToolbar": true,
    "height":"620px",
    "width":"1000px",
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
