import './HourNumbers.css';
import Hour from './Hour';

const HourNumbers = () => {
    const nums = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const hours = nums.map((hour) => <Hour time={hour} key={hour} angle={(hour*30)} />); 

    return (
        <div className='hour-numbers'>
            {hours}
        </div>
    )
};

export default HourNumbers;