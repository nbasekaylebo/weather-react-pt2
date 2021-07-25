import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Nastassja Basekay Wa Basekay and is
          open-sourced on{" "}
          <a
            href="https://github.com/nbasekaylebo/weather-react-pt2"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
