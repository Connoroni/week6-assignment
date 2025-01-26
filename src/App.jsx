import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop";

export default function App() {
  const [biscuits, setBiscuits] = useState(0);
  const [bps, setBps] = useState(0);
  const [notEnough, setNotEnough] = useState(false);
  useEffect(() => {
    const biscuitTimer = setInterval(
      () =>
        setBiscuits((currentBiscuits) => {
          return currentBiscuits + bps;
        }),
      1000
    );
    return () => {
      clearInterval(biscuitTimer);
    };
  }, [bps]);
  function clickBiscuit() {
    setBiscuits((currentBiscuits) => {
      return currentBiscuits + 1;
    });
  }
  function buyUpgrade(cost, increase) {
    if (biscuits > cost) {
      setBps((currentBps) => {
        return currentBps + increase;
      });
      setBiscuits((currentBiscuits) => {
        return currentBiscuits - cost;
      });
    } else {
      setNotEnough(true);
      setTimeout(() => {
        setNotEnough(false);
      }, 1500);
    }
  }
  return (
    <>
      <Header totalBiscuits={biscuits} bps={bps} clickEvent={clickBiscuit} />
      {notEnough ? (
        <div className="message-div">
          <p className="not-enough">You don&apos;t have enough biscuits</p>
        </div>
      ) : null}
      <Shop buyEvent={buyUpgrade} />
    </>
  );
}
