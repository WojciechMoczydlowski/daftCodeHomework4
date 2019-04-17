import pageVisitingTime from '../clockModules/visitingPageTime'
function* secondsGenerator(initializeSecond){ 
    while(true){
           initializeSecond=initializeSecond%60;
            yield initializeSecond; 
            initializeSecond++;}
}

const secondsIterator = secondsGenerator(pageVisitingTime.second);
export default secondsIterator;
