import { useEffect, useState } from 'react';
import './App.css';
import BaseClock from './components/BaseClock';

function App() {

  const [hourAngle, setHourAngle] = useState(0);
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [secondAngle, setSecondAngle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {

      const d = new Date();

      const secondsPct = d.getSeconds() / 60;
      const minutesPct = (secondsPct + d.getMinutes()) / 60;
      const hoursPct = (minutesPct + d.getHours()) / 12;

      const seconds = secondsPct * 360;
      const minutes = minutesPct * 360;
      const hours = hoursPct * 360;

      setSecondAngle(seconds);
      setMinuteAngle(minutes);
      setHourAngle(hours);

    },1000);

    return () => clearInterval(timer);
  },[]);

  useEffect(() => {
    // console.log(secondAngle);
  },[secondAngle]);
  
  return (
    <div className="App">
      <BaseClock hourAngle={hourAngle} minuteAngle={minuteAngle} secondAngle={secondAngle}/>
    </div>
  );
}

export default App;
