import "./App.css";
import { useCallback, useState } from "react";
// import { useGoogleAnalytics } from "./use-google-analytics";
import ReactGA from "react-ga4";

function App() {
  const [url, setUrl] = useState("");
  // const { trackEvent } = useGoogleAnalytics("G-MGC2PD7177"); // Your GA Measurement ID
  ReactGA.initialize("G-MGC2PD7177");

  const inputChangeHandler = useCallback(
    (value) => {
      console.log(value?.target?.value);
      setUrl(value?.target?.value);
    },
    [setUrl]
  );

  const clickHandler = useCallback(() => {
    // trackEvent("feature_engagement", {
    //   event_category: "Feature",
    //   event_label: "New Feature Used",
    //   value: 1,
    // });
    // window.location.href = url;

    ReactGA.event({
      category: "Feature",
      action: "Feature Engagement",
      label: "New Feature Used",
      value: 1,
    });
  }, [url]);

  return (
    <div className="App">
      <input type="text" value={url} onChange={inputChangeHandler}></input>
      <br />
      <br />
      <br />
      <a href={url}>{url}</a>
      <br />
      <br />
      <br />
      <button value="Click Me" onClick={clickHandler}>
        {" "}
        CLICK ME{" "}
      </button>
    </div>
  );
}

export default App;
