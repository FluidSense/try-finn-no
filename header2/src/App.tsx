import { ReactComponent as Logo } from "./logo.svg";
import { LoggInn, Meldinger, NyAnnonse, Varslinger } from "./LinkButton";

function App() {
  return (
    <header
      style={{
        margin: "auto 20%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo
          style={{ display: "inline", width: "7em", marginRight: "15px" }}
        />
        <p style={{ fontWeight: "bold" }}>Mulighetens marked 2</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Varslinger />
        <NyAnnonse />
        <Meldinger />
        <LoggInn />
      </div>
    </header>
  );
}

export default App;
