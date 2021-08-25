import './MinuteHashMarks.css';
import HashMark from './HashMark';

const MinuteHashMarks = (props) => {
    // hour hashmarks
    // const hourHashMarksArray = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

    // const hourHashMarks = hourHashMarksArray.map(mark => <HashMark angle={mark * 6} />);
    
    return (
        <div className='hash-mark-container' style={{transform: `rotate(${props.angle}deg)`}}>
            <HashMark size={props.size} />
        </div>
    )
};

export default MinuteHashMarks;