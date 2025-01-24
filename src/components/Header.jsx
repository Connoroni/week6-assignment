import Biscuits from "./Biscuits";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <div className="title-div">
        <h1 className="title">Biscuit Breaker</h1>
      </div>
      <div className="biscuit-display">
        <h2 className="total-biscuits">
          Total biscuits: {props.totalBiscuits}
        </h2>
        <Biscuits clickEvent={props.clickEvent} />
        <h2 className="biscuits-per-second">
          Biscuits per Second: {props.bps}{" "}
        </h2>
      </div>
    </header>
  );
}
