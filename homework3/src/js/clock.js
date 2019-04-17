import secondsIterator from './generators/secondsGenerator'
import minutesIterator from './generators/minutesGenerator'
import hoursIterator from './generators/hoursGenerator'
import pageVisitingTime from './clockModules/visitingPageTime'
import timeToString from './clockModules/timeToString'   
    
const clock = ()=>{

    const myClock = document.getElementsByTagName('h1');

    let seconds=pageVisitingTime.second;
    let minutes=pageVisitingTime.minute;
    let hours=pageVisitingTime.hour;

    secondsIterator.next().value
    minutesIterator.next().value
    hoursIterator.next().value;

    const clockCicle = () =>{ 

        myClock[0].innerText = timeToString(hours,minutes,seconds);
        
        if(seconds === 59){  
        if(minutes == 59){
            hours=hoursIterator.next().value;
        }
        minutes=minutesIterator.next().value;
    }
     seconds=secondsIterator.next().value;
    }
    return setInterval(clockCicle,1000);;
}

export default clock;