// Code your solution in this file!
const returnFirstTwoDrivers = (array)=>{
    return [array[0], array[1]];
};

const returnLastTwoDrivers = (array)=>{
return array.slice(1).slice(-2);

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
   return (fare)=>{
      return  int * fare;
    }
}

const fareDoubler = (fare) => { return createFareMultiplier(2)(fare); }

const fareTripler = (fare) => { return createFareMultiplier(3)(fare);}


function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}
