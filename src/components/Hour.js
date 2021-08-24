import "./Hour.css";

const Hour = (props) => {
  return (
    <div className="hour" style={{ transform: `rotate(${props.angle}deg)` }}>
      <div style={{ transform: `rotate(-${props.angle}deg)`}}>
          {props.time}
      </div>
    </div>
  );
};

export default Hour;
