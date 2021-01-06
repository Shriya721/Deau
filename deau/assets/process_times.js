function processTimesDict(users, booleanize = true) {
  /* 'users' is a dictionary of 2d arrays
   * 'booleanize' is a flag that decides
   * if this function returns an array of bools (when true)
   * or ints (when false)
   * 
   * */
  timesDict = users[Object.keys(users)[0]].map((x) => x);
  //console.log("times " + timesDict);
  //setting counters
  for (i = 0; i < timesDict.length; ++i) {
    for (j = 0; j < timesDict[i].length; ++j) {
      timesDict[i][j] = 0;
    }
  }

  let maxNum = 0;
  //console.log("times " + timesDict);
  for ((u) in users) {
    //console.log("user||" + users[u])
    for (i = 0; i < timesDict.length; ++i) {
      //console.log("u1|" + users[u][i]);
      for (j = 0; j < timesDict[i].length; ++j) {
        timesDict[i][j] += users[u][i][j];
        if (timesDict[i][j] > maxNum) {
          maxNum = timesDict[i][j];
        }
      }//2nd level of user arr
    }//1st level of user arr
  }//loop iterating through users in user dict
  //console.log("times||" + timesDict)
  //final pass, converting maxNum values to true and all else to false
  //if (maxNum )
  if (booleanize) {
    for (i = 0; i < timesDict.length; ++i) {
      for (j = 0; j < timesDict[i].length; ++j) {
        timesDict[i][j] = (timesDict[i][j] == maxNum);
      }
    }
  }
  return timesDict;
}

function reformatUserTimes(attendees) {
  newDict = {};
  attendeeList = Object.keys(attendees);
  for (x in attendeeList) {
    newDict[attendeeList[x]] = attendees[attendeeList[x]].Times;
  }
  return newDict;

}