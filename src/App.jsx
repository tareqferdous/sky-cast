import Page from "./Page";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <Page />
    </WeatherProvider>
  );
}

export default App;
