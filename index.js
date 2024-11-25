function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
function saturdayAlt(activity = `bathe my dog`) {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayAlt());
function mondayWork(activity = `go to the office`) {
  return `This Monday, I will ${activity}.`;
}

function mondayAlt(activity = `work from home`) {
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair = "*") {
  return function (adjective = "a hard worker") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

function wrapAdjectiveAlt(flair = "||") {
  return function (adjective = "a dedicated programmer") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
console.log(wrapAdjectiveAlt(flair));
