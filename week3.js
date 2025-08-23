const getSleepHours = day => {
   if (day=='Monday'){
  return 8;
  }
  else if(day=='Tuesday'){
    return 7;
  }
  else if(day=='Wednesday'){
    return 6;
  }
  else if(day=='Thursday'){
    return 8;
  }
  else if(day=='Friday'){
    return 7;
  }
  else if(day=='Saturday'){
    return 7;
  }
  else if(day=='Sunday'){
    return 7;
  }

};


const getActualSleepHours = () => {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + 
getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
};

const getIdealsleepHours= ()=>{
  const idealHours=8;
  return idealHours*7;
};
const calculateSleepDebt=()=> {
  const actualSleepHours=getActualSleepHours();
   const idealSleepHours=getIdealsleepHours();
   if (actualSleepHours === idealSleepHours) {
  console.log('Normal');
} else if (actualSleepHours > idealSleepHours) {
  console.log('more');
} else {
  console.log('less');
}
if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}

};
calculateSleepDebt();

