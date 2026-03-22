import "./shop.ts"
import {Multi} from "./shop.ts";

export let balance:number = 0;
export let gears:number = 0;

export function getBlock(value:number, type:string):void {
    switch (type) {
        case "Gears":
            addGears(value);
            break;
        case "Balance":
            addBalance(value);
            break;
        default:
            console.log("Wrong type " + type);

    }
    //console.log(balance);
}

function addBalance(value:number):void {
    balance += value * Multi;
    updateDisplayValue("Balance")
}
function addGears(value:number):void {
    gears += value * Multi;
    updateDisplayValue("Gears")
}

export function updateDisplayValue(target: string) {
    switch (target) {
        case "Gears":
            const userGridDisplay:HTMLElement | null = document.getElementById("userGridDisplay");
            if (userGridDisplay) {
                userGridDisplay.innerText = String(gears);
            }
            break;
        case "Balance":
            const userBalanceDisplay:HTMLElement | null = document.getElementById("userBalanceDisplay");
            if (userBalanceDisplay) {
                userBalanceDisplay.innerText = String(balance);
            }
            break;
        default:
            break;
    }
}

export function applyBuyItemCash(value: number):void {
    balance -= value * Multi;
    updateDisplayValue("Balance")
}