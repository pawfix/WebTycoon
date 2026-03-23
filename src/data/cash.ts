import {updateDisplayValue} from "../ui/display.ts";
import "./shop.ts"
import {Multi} from "./shop.ts";
import type {ResourceType} from "./types.ts";

export let balance: number = 90;
export let gears: number = 0;

export function getBlock(value: number, type: ResourceType): void {
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

function addBalance(value: number): void {
    balance += value * Multi;
    updateDisplayValue("Balance")
}

function addGears(value: number): void {
    gears += value * Multi;
    updateDisplayValue("Gears")
}


export function applyBuyItemCash(value: number): void {
    balance -= value * Multi;
    updateDisplayValue("Balance")
}