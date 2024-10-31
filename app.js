let bank = 100

// 🗃️ STATE

const players = [
    { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
    { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
    { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
    { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
    { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
    { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
    { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
    { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
    { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
    { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
    { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
    { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
    { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
    { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
    { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
    { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
    { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
    { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
    { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
    { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

//#region 
const teamOneBooElm = document.getElementById('teamOneBoo')
const teamTwoAHHHElm = document.getElementById('teamTwoAHHH')

const Teams = [
    'teamOneBoo',
    'teamTwoAHHH'
]


// 🧠 LOGIC

function drawTeam1() {
    teamOneBooElm.innerText = ''
    for (let i = 0; i < players.length; i++) {
        let player = players[i]
        console.log('drawing player', player)
        if (player.teamNumber == 'teamOneBoo')
            teamOneBooElm.innerHTML += `<span>${player.emoji}</span>`
    }

    console.log('the loop is over....')
}

function drawTeam2() {
    teamTwoAHHHElm.innerText = ''
    for (let i = 0; i < players.length; i++) {
        let player = players[i]
        console.log('drawing player', player)
        if (player.teamNumber == 'teamTwoAHHH')
            teamTwoAHHHElm.innerHTML += `<span>${player.emoji}</span>`
    }

    console.log('the loop is over....')
}


function changeTeams() {
    for (let i = 0; i < players.length; i++) {
        let player = players[i]
        let randomTeam = Math.floor(Math.random() * Teams.length)
        player.teamNumber = Teams[randomTeam]
        console.log('change teams', Teams)

    }
    drawTeams()
}

function drawTeams() { // draw utility, if i need to draw more than one, just re-draw all
    drawTeam1()
    drawTeam2()
}




// 🖌️ Putting it on the Page

function start() {
    changeTeams()
    drawTeams()

}

start()
//#endregion



function betTeam1() {
    let team1Skill = 0
    let team2Skill = 0




}






