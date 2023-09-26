const getBarPercentage=(amountCollected,target)=>{
    return 100-Math.round(((target-amountCollected)/target)*100);
}

const daysLeft=(deadline)=>{
    console.log("daysLeft",deadline);
    const difference = Date.now()-new Date(deadline).getTime();
    const remainingDays = difference / (1000 * 3600 * 24);
  
    return remainingDays.toFixed(0);
}

export {getBarPercentage,daysLeft};