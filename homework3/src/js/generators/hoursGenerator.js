import pageVisitingTime from '../clockModules/visitingPageTime'
function* hoursGenerator(initializeHours){
    while(true){
        initializeHours= initializeHours%12;
        yield initializeHours;
        initializeHours++;}
}

const hoursIterator = hoursGenerator(pageVisitingTime.hour);
export default hoursIterator;