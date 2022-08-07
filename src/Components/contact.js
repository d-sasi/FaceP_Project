import "./contact.css";

function Card(props) {
  return (
    <div className="task-container">
      <div className="taskdetails-container">
        <span className="left">
          <h2>{props.title}</h2>
          <p> {props.address} </p>
        </span>

        <span className="right">
          <img src={props.image} height="auto" width="120px" id="user" />
        </span>
      </div>
    </div>
  );
}

export default Card;
