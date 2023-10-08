//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam , trophiesWon) {
  let managerArray = [managerName, managerAge, currentTeam , trophiesWon]
  return managerArray;
}



// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}



//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length == 0){
    return null
  }
  let playFormation = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  }
  return playFormation;
}




// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {

  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let playerData = players.filter(player => player.debut == year);
  return playerData;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position)
 {
  let playerData = players.filter(player => player.position == position);
  return playerData;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) 
{
  let arr1 = [];

  for (let i = 0; i < players.length; i++)
   {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        arr1.push(players[i]);
      }
    }
  }

  return arr1;
}




//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr2 = [];
  let count1 = 0;
  let m=0;
  let j;
  for (let i = 0; i < players.length; i++)
    {
      for (j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName)
         {
            count1++;       
        }
      }
    if (count1 == noOfTimes)
    {
      arr2.push(players[i]);
    }
    count1 = 0;
  }
  return arr2;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country)
 {
  let dataAwards = filterByAward(awardName);
  let playerData = dataAwards.filter(player => player.country == country);
  return playerData;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let playerData = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return playerData;
}




//Progression 9 - Sort players in descending order of their age
function ageFilter() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}


//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function teamAwardsFilter(team) {
  let count = 0;
  let filterPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filterPlayers[count++] = players[i];
    }
  }
  for (let i = 0; i < filterPlayers.length; i++) {
    for (let j = i + 1; j < filterPlayers.length; j++) {
      if (filterPlayers[i].awards.length < filterPlayers[j].awards.length) {
        let temp = filterPlayers[i];
        filterPlayers[i] = filterPlayers[j];
        filterPlayers[j] = temp;
      }
    }
  }
  return filterPlayers;
}




//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function comparisonFilter(a, b) {
  let values = 0;
  if (a.name > b.name) {
    values = 1;
  }
  else if (a.name < b.name) { values = -1; }
  else { values = 0; }
}
function filterNameAwardTimes(awardName, noOfTimes, country) {
  let data1 = timesAwardFilter(awardName, noOfTimes);
  let data2 = data1.filter(player => player.country == country);
  return data2.sort(comparisonFilter);
}




//Challenge 2 - Sort players that are older than _____ years in alphabetical order
function sortOlderThanAndName(age) {
  var playerData = players.filter(player => player.age > age);
  return playerData;
}


//Sort the awards won by them in reverse chronological order
