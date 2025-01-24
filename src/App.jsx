import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop";

export default function App() {
  const [biscuits, setBiscuits] = useState(0);
  const [bps, setBps] = useState(0);
  useEffect(() => {
    const biscuitTimer = setInterval(
      () =>
        setBiscuits((currentBiscuits) => {
          currentBiscuits + bps;
        }),
      1000
    );
    return () => {
      clearInterval(biscuitTimer);
    };
  }, [bps]);
  function clickBiscuit() {
    setBiscuits((currentBiscuits) => {
      currentBiscuits + 1;
    });
  }
  function buyUpgrade(cost, increase) {
    setBps((currentBps) => {
      currentBps + increase;
    });
    setBiscuits((currentBiscuits) => {
      currentBiscuits - cost;
    });
  }
  return (
    <>
      <Header totalBiscuits={biscuits} bps={bps} clickEvent={clickBiscuit} />
      <Shop buyEvent={buyUpgrade} />
    </>
  );
}
