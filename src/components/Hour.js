import "./Hour.css";

const Hour = (props) => {
  return (
    <div className="hour" style={{ transform: `rotate(${props.angle}deg) translateY(2%)` }}>
      <div style={{ transform: `rotate(-${props.angle}deg)`}}>
          {props.time}
      </div>
    </div>
  );
};

export default Hour;
