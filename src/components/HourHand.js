import './HourHand.css';

const HourHand = (props) => {
    return (
        <div className='hand hour-hand' style={{ transform: `rotate(${props.angle}deg) translateX(-50%)` }}>
            
        </div>
    )
};

export default HourHand;