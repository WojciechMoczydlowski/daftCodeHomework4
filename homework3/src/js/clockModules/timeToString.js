const timeToString = (hours,minutes,seconds) =>{
    let time = '';
    if(hours<10) time+='0';
    time+=String(hours);
    time+=':';

    if(minutes<10) time+='0';
    time+=String(minutes);
    time+=':';

    if(seconds<10) time+='0';
    time+=String(seconds);

    return time;
}

export default timeToString;
