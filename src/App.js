import "./App.css";
import { useCallback, useState } from "react";
// import { useGoogleAnalytics } from "./use-google-analytics";
import ReactGA from "react-ga4";

function App() {
  const [url, setUrl] = useState("");
  // const { trackEvent } = useGoogleAnalytics("G-MGC2PD7177"); // Your GA Measurement ID
  // ReactGA.initialize("G-MGC2PD7177");
  ReactGA.initialize([
    {
      trackingId: "G-MGC2PD7177",
      // Keep analytics quiet unless explicitly to send events:
      gaOptions: { send_page_view: false },
    },
  ]);

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
      category: "Autho assist Dialog",
      action: "maximize_click",
      label: "User clicked maximize Button",
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
      category: "Autho assist Dialog",
      action: "minimize_click",
      label: "User clicked minimize Button",
    });
  }, []);

  const captureTime = useCallback(() => {
    // trackEvent("feature_engagement", {
    //   event_category: "Feature",
    //   event_label: "New Feature Used",
    //   value: 1,
    // });
    // window.location.href = url;

    ReactGA.event({
      category: "Autho assist Dialog",
      action: "visible_duration",
      label: "Autho assist dialog visible time in seconds",
      value: 120,
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
