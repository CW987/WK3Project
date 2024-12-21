console.log("Index linked")

// let gameData = {
//     catCount: 0,
//     perSecond: 0,
// }
// console.log("Let values added")

const plusOneButton = document.getElementById("plusOneButton")
const resetButton = document.getElementById("resetButton")
const currentTotal = document.getElementById("currentTotal")
const perSecond = document.getElementById("perSecond")
const shopContainer = document.getElementById("shopContainer")
console.log("DOM linked")

async function getUpgrades() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP Response", response);
    const data = await response.json();
    console.log("JSON Data", data);
    const shopUpgradesArray = [];
    return shopUpgradesArray;
}

getUpgrades()