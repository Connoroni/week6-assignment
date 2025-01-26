import "./ShopUpgrades.css";

export default function ShopUpgrades(props) {
  return (
    <div className="upgrade">
      <p className="upgrade-name">{props.name}</p>
      <p className="upgrade-cost">{props.cost}</p>
      <p className="upgrade-increase">{props.increase}</p>
      <button
        onClick={() => {
          props.buyEvent(props.cost, props.increase);
        }}
      >
        Buy!
      </button>
    </div>
  );
}
