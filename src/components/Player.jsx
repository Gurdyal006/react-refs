import { useRef, useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState(null);
  const PlayerName = useRef();

  function hanndleClickName() {
    setEnterPlayerName(PlayerName.current.value);
    PlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={PlayerName} />
        <button onClick={hanndleClickName}>Set Name</button>
      </p>
    </section>
  );
}
