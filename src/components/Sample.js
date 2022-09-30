import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function Sample(props) {
  
  // const [url] = useState(
  //   "https://prod-useast-a.online.tableau.com/t/clairmonika/views/dashboard1/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
  // );
  
  const [url] = useState(
    "https://prod-apnortheast-a.online.tableau.com/t/samplepoc/views/Redshift_balance_sheet/Sheet1?:origin=card_share_link&:embed=n"
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