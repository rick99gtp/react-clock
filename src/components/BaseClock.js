import './BaseClock.css';
import Knob from './Knob';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import HourNumbers from './HourNumbers';
import MinuteHashMarks from './MinuteHashMarks';

const BaseClock = (props) => {
    // create all hashmarks
    const hashMarkArray = new Array(60);
    for(let i=0; i < 60; i++) {
        hashMarkArray.push(i);
    }

    const hourHashMarks = hashMarkArray.map(mark => <MinuteHashMarks key={mark} size={mark} angle={ mark * 6} />);

    return (
        <div className='clock-container'>
            <HourNumbers />
            <HourHand angle={props.hourAngle}/>
            <MinuteHand angle={props.minuteAngle}/>
            <SecondHand angle={props.secondAngle}/>
            {hourHashMarks}
            <Knob />
        </div>
    )
};

export default BaseClock;