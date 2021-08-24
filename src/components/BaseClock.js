import './BaseClock.css';
import Knob from './Knob';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import HourNumbers from './HourNumbers';

const BaseClock = () => {
    return (
        <div className='clock-container'>
            <HourNumbers />
            <Knob />
            <HourHand />
            <MinuteHand />
            <SecondHand />
        </div>
    )
};

export default BaseClock;