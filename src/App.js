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

      // get percentages
      const secondsPct = d.getSeconds() / 60;
      const minutesPct = (secondsPct + d.getMinutes()) / 60;
      const hoursPct = (minutesPct + d.getHours()) / 12;

      // get angles
      const seconds = secondsPct * 360;
      const minutes = minutesPct * 360;
      const hours = hoursPct * 360;

      // store state
      setSecondAngle(seconds);
      setMinuteAngle(minutes);
      setHourAngle(hours);

    },1000);

    // When component unmounts
    return () => clearInterval(timer);
  },[]);
  
  return (
    <div className="App">
      <BaseClock hourAngle={hourAngle} minuteAngle={minuteAngle} secondAngle={secondAngle}/>
    </div>
  );
}

export default App;
