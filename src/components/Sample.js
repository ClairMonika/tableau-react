import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function Sample(props) {
  
  const [url] = useState(
    "https://prod-apnortheast-a.online.tableau.com/t/samplepoc/views/Redshift_balance_sheet/Dashboard1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
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
