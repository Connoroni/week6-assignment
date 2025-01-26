import { useState, useEffect } from "react";
// import { fetchData } from "../lib/data";
import ShopUpgrades from "./ShopUpgrades";
import "./Shop.css";

export default function Shop(props) {
  const [upgrades, setUpgrades] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setUpgrades(data);
    }
    fetchData();
  }, []);
  return (
    <section className="shop-section">
      <div className="shop-div">
        {upgrades.map(function (item) {
          return (
            <ShopUpgrades
              key={item.id}
              name={item.name}
              cost={item.cost}
              increase={item.increase}
              buyEvent={props.buyEvent}
            />
          );
        })}
      </div>
    </section>
  );
}
