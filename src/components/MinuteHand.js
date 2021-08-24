import './MinuteHand.css';

const MinuteHand = (props) => {
    return (
        <div className='minute-hand' style={{ transform: `rotate(${props.angle}deg) translateX(-50%)`}}>

        </div>
    )
};

export default MinuteHand;