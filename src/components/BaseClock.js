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

    // const hourHashMarksArray = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const hourHashMarks = hashMarkArray.map((mark, idx) => <MinuteHashMarks key={mark} size={mark} angle={ mark * 6} />);

    // create all minute hashmarks
    // const minuteHashMarksArray = [];
    // const minuteHashMarks = minuteHashMarksArray.map(mark => <MinuteHashMarks angle={mark * 30} />);

    return (
        <div className='clock-container'>
            <HourNumbers />
            <Knob />
            <HourHand angle={props.hourAngle}/>
            <MinuteHand angle={props.minuteAngle}/>
            <SecondHand angle={props.secondAngle}/>
            {hourHashMarks}
        </div>
    )
};

export default BaseClock;