import './SecondHand.css';

const SecondHand = (props) => {
    console.log(props.angle);
    return (
        <div className='second-hand' style={{ transform: `rotate(${props.angle}deg) translateX(-50%)` }}>

        </div>
    )
};

export default SecondHand;