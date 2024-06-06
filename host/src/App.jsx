import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { mount } from "VueMicroFrontend/HelloWorld";
import "./index.css";

const App = () => {
  const ref = useRef(null);
  const props = {
    message: "Hello from React!",
  };
  useEffect(() => {
    mount(ref.current, props);
  }, []);
  return (
    <div className="container">
      <div>Name: host</div>
      <div ref={ref} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
