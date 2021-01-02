//My JSON data

const teams = [
    {name: 'Chelsea', points: 75},
    {name: 'Arsenal', points: 32},
    {name: 'Man City', points: 100},
    {name: 'Liverpool', points: 95},
    {name: 'Man Utd', points:105}
    
]

//Filter
const qTeams = teams.filter((team) => {

    return team.points >= 80

})

console.log(qTeams)


//Map
const teamNames = teams.map((team)=>{
    return team.points;
})

console.log(teamNames)

//Find

const findTeam = teams.find((team) => {
    return team.name === 'Man Utd'
})

console.log(findTeam)

//For Each

teams.forEach((team)=>{
    
    console.log(team.name)
})

//Some

const rTeams = teams.some((team) =>{
    return team.points <= 80
}) 
console.log(rTeams)

//Every

const bSTeams = teams.every((team) =>{
    return team.points <= 80
}) 
console.log(bSTeams)

//Reduce

const total = teams.reduce((currentTotal, team) =>{     
//currentTotal *First Parameter* = previous iteration of the array returned
// team *Second Item* = Actual Item in the array
    return team.points + currentTotal
},0)
//0 = second parameter which is the starting point for currentTotal
console.log(total)

