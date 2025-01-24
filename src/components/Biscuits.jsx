import "./Biscuits.css";

//Stretch goal for myself: have a useState to let the user switch between a custard cream (yum) and bourbon (less yum but still good)
export default function Biscuits(props) {
  return (
    <>
      <img
        onClick={props.clickEvent}
        className="biscuit-button"
        src="/custard_cream_transparent.png"
        alt="A custard cream biscuit, this is used as the button for the user to click to get more cookies."
      />
    </>
  );
}
