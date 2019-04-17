import pageVisitingTime from '../clockModules/visitingPageTime'
function* minutesGenerator(initializeMinutes){
    while(true){
        initializeMinutes= initializeMinutes%60;
        yield initializeMinutes;
        initializeMinutes++;}
}

const minutesIterator = minutesGenerator(pageVisitingTime.minute);
export default minutesIterator;