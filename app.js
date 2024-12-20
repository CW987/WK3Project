console.log("Link test complete")

let gameData = {
    catCount: 0,
    perSecond: 0,
}
console.log("Let values added")

async function GetProducts() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP Response", response);
    const json = await response.json();
    console.log("JSON Data", json);
}

GetProducts()


// shopUpgradesArray.push(...data);