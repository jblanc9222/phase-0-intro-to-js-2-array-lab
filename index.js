// Write your solution here!
const cats=[
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}  
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
const newcats=["Broom"];
    function appendCat(){
        let newcats=([...cats,"Broom"]);
        return newcats;
    }
const orangecats=["Arnold"];
function prependCat(){
    let orangecats=(["Arnold",...cats]);
    return orangecats
}
function removeLastCat(){
    return cats.slice(0,-1);
}
function removeFirstCat(){
    return cats.slice(1);
}
