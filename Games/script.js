let money = 0;

let clickValue = 1;
let upgradeCost = 10;

let megavalue = 300;

function clickButton() {
    money += clickValue;
    updateCounter();
}

function upgradeButton() {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        clickValue += 1;
        upgradeCost *= 2;
        updateCounter();
    } else {
        alert("Not enough money to upgrade!");
    }
}

function megaButton() {
    if (money >= megavalue) {
        money -= megavalue;
        clickValue *= 2;
        megavalue *= 4;
        updateCounter();
    } else {
        alert("Not even close Bitch!");
    }

}

function updateCounter() {
    document.getElementById("counter").textContent = money;
    document.getElementById("upgradeButton").textContent = `Upgrade (+${clickValue}) $${upgradeCost}`;
    document.getElementById("megaButton").textContent = `Upgrade (+${clickValue}) $${megavalue}`;
}