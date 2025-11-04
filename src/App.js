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

  const maxClickHandler = useCallback(() => {
    // trackEvent("feature_engagement", {
    //   event_category: "Feature",
    //   event_label: "New Feature Used",
    //   value: 1,
    // });
    // window.location.href = url;

    ReactGA.event({
      category: "Maximize Button Clicked",
      action: "Click",
      label: "Autho Assist Maximize Button",
      value: 1,
    });
  }, []);

  const minClickHandler = useCallback(() => {
    // trackEvent("feature_engagement", {
    //   event_category: "Feature",
    //   event_label: "New Feature Used",
    //   value: 1,
    // });
    // window.location.href = url;

    ReactGA.event({
      category: "Minimize Button Clicked",
      action: "Click",
      label: "Autho Assist Minimize Button",
      value: 1,
    });
  }, []);

  const captureTime = useCallback(() => {
    // trackEvent("feature_engagement", {
    //   event_category: "Feature",
    //   event_label: "New Feature Used",
    //   value: 1,
    // });
    // window.location.href = url;

    ReactGA.event("autho_assist_engagement_ms", {
      form_name: "autho_assist",
      form_variant: "v1",
      status: "submit",
      engagement_ms: 10000000,
    });
  }, []);

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
      <button value="Click Me" onClick={maxClickHandler}>
        Maximize button
      </button>
      <br />
      <br />
      <br />
      <button value="Click Me" onClick={minClickHandler}>
        Minimize button
      </button>
      <br />
      <br />
      <br />
      <button value="Capture Time" onClick={captureTime}>
        Time Capture
      </button>
    </div>
  );
}

export default App;
