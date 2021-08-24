import './BaseClock.css';
import Knob from './Knob';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import HourNumbers from './HourNumbers';

const BaseClock = (props) => {
    return (
        <div className='clock-container'>
            <HourNumbers />
            <Knob />
            <HourHand angle={props.hourAngle}/>
            <MinuteHand angle={props.minuteAngle}/>
            <SecondHand angle={props.secondAngle}/>
        </div>
    )
};

export default BaseClock;