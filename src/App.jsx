import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="Easy" targetTime={1} />
        <Timer title="Not Easy" targetTime={5} />
        <Timer title="Little Difficult" targetTime={10} />
        <Timer title="Difficult" targetTime={15} />
      </div>
    </>
  );
}

export default App;
