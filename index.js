// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    const newList = [...cats, name]
    return newList;
}

function prependCat(name) {
    const newList = [name, ...cats]
    return newList;
}

function removeLastCat() {
    const newList = cats.slice(0,-1)
    return newList;
}

function removeFirstCat() {
    const newList = cats.slice(1)
    return newList;
}