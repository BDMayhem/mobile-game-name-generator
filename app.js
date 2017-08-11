let names = [
    {
        name: "War",
        num: 62
    },{
        name: "Heroes",
        num: 55
    },{
        name: "Dragon",
        num: 34
    },{
        name: "Legend",
        num: 31
    },{
        name: "Battle",
        num: 28
    },{
        name: "Monster",
        num: 23
    },{
        name: "Adventure",
        num: 23
    },{
        name: "Mobile",
        num: 23
    },{
        name: "RPG",
        num: 22
    },{
        name: "World",
        num: 22
    },{
        name: "Fantasy",
        num: 19
    },{
        name: "Star",
        num: 19
    },{
        name: "Quest",
        num: 19
    },{
        name: "Kingdom",
        num: 19
    },{
        name: "Knights",
        num: 17
    },{
        name: "Warriors",
        num: 17
    },{
        name: "Empire",
        num: 17
    },{
        name: "Souls",
        num: 16
    },{
        name: "Final",
        num: 16
    },{
        name: "Alliance",
        num: 16
    },{
        name: "Clash",
        num: 14
    },{
        name: "Blade",
        num: 14
    },{
        name: "Dungeon",
        num: 14
    },{
        name: "King",
        num: 12
    },{
        name: "Saga",
        num: 12
    },{
        name: "Guardians",
        num: 12
    },{
        name: "Conquest",
        num: 12
    },{
        name: "Arena",
        num: 11
    },{
        name: "Super",
        num: 11
    },{
        name: "Gods",
        num: 11
    },{
        name: "Age",
        num: 11
    },{
        name: "Mini",
        num: 11
    },{
        name: "Zombie",
        num: 10
    },{
        name: "Blood",
        num: 10
    },{
        name: "Raid",
        num: 10
    },{
        name: "Puzzle",
        num: 10
    },{
        name: "Tactics",
        num: 10
    },{
        name: "Titan",
        num: 10
    },{
        name: "Force",
        num: 10
    },{
        name: "Fighters",
        num: 10
    },{
        name: "Master",
        num: 9
    },{
        name: "Online",
        num: 9
    },{
        name: "Guns",
        num: 9
    },{
        name: "League",
        num: 9
    },{
        name: "Sword",
        num: 9
    },{
        name: "City",
        num: 9
    },{
        name: "Castle",
        num: 9
    },{
        name: "Champions",
        num: 8
    },{
        name: "Duel",
        num: 8
    },{
        name: "Eternal",
        num: 8
    },{
        name: "Lords",
        num: 8
    },{
        name: "Spirit",
        num: 8
    },{
        name: "Tap",
        num: 8
    },{
        name: "Glory",
        num: 8
    },{
        name: "Go",
        num: 8
    },{
        name: "Magic",
        num: 7
    },{
        name: "Pocket",
        num: 7
    },{
        name: "Rival",
        num: 7
    },{
        name: "Squad",
        num: 7
    },{
        name: "Summoners",
        num: 7
    },{
        name: "Turbo",
        num: 7
    },{
        name: "Tales",
        num: 6
    },{
        name: "Epic",
        num: 6
    },{
        name: "Brave",
        num: 6
    },{
        name: "Space",
        num: 6
    },{
        name: "Storm",
        num: 6
    },{
        name: "Racer",
        num: 6
    },{
        name: "Fire",
        num: 6
    },{
        name: "Little",
        num: 5
    },{
        name: "Heart",
        num: 5
    },{
        name: "Ultimate",
        num: 5
    },{
        name: "Brave",
        num: 5
    },{
        name: "Tiny",
        num: 5
    },{
        name: "Ghost",
        num: 5
    },{
        name: "Rune",
        num: 5
    },{
        name: "Project",
        num: 5
    },{
        name: "Soldiers",
        num: 5
    },{
        name: "Mighty",
        num: 5
    },{
        name: "Galaxy",
        num: 5
    },{
        name: "Cosmic Warrior",
        num: 5
    },{
        name: "Origins",
        num: 5
    },{
        name: "Crash",
        num: 5
    }
];
let used = [];

document.getElementById("button").addEventListener("click", chooseThree);

function chooseThree(){
    if (used.length >= 30){
        used.forEach(function(e){
            names.push(Object.assign(e));
        });
        used = [];
    }

    let name = "";
    const numb = Math.floor(Math.random() * 3) + 2;

    for (let i = 0; i < numb; i++){
        let sum = 0;
        names.forEach(function(e){
            sum += e.num;
        });

        let rand = Math.floor(Math.random() * sum);

        for (let j = 0; j < names.length; j++){
            rand -= names[j].num;
            if (rand <= 0){
                name += names[j].name + " ";

                let chosen = names.splice(j, 1)[0];
                used.push(chosen);

                console.log(name, chosen, used);
                break;
            }
        }
    }
    document.getElementById("show").innerText = name;
}