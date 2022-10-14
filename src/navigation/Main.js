import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";
import Sample from "../components/Sample";
import Sample2 from "../components/Sample2";
import Sample3 from "../components/Sample3";

function Main() {
  return (
    <section>
      <Route path="/" exact component={Home} />
      <Route path="/sample/" component={Sample} />
      <Route path="/sample2/" component={Sample2} />
      <Route path="/sample3/" component={Sample3} />
      {/* testing sending string prop and destructure in component */}
    </section>
  );
}

export default Main;
