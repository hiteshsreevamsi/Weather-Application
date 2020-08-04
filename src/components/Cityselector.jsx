import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";

function Cityselector(props) {
  const ref = React.useRef();

  var { onCityHandler } = props;
  const [state, setState] = useState("");
  React.useEffect(() => {
    ref.current.focus();
    try {
      const city = localStorage.getItem("myData");
      console.log("hhh", JSON.stringify(city));
      if (city.length > 1) {
        setState(city);
      }
    } catch (exc) {
      console.log("hhh", exc);
    }
  }, []);
  /*React.useEffect(() => {
    console.log(state);
    localStorage.setItem("myData", state);
  }, [state]);
*/
  var oncity = () => {
    onCityHandler(state);
  };
  var onCancel = () => {
    setState("");
  };
  return (
    <div>
      <SearchBar
        ref={ref}
        placeholder='Search using any city name to get weather details of next 5 days'
        value={state}
        onChange={(newValue) => {
          localStorage.setItem("myData", newValue);
          console.log("hello", newValue);
          setState(newValue);
        }}
        onRequestSearch={oncity}
        onCancelSearch={onCancel}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      />
    </div>
  );
}

export default Cityselector;
