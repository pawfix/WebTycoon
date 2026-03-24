import {updateDisplayValue} from "../ui/display.ts";
import "./shop.ts"
import {Multi} from "./shop.ts";
import type {ResourceType} from "./types.ts";

/*
Here the cash related data stored.
Stuff like gears and balance are set and edited here
Also contains checks
*/

// User balance and gear amount. Used in shop etc
export let balance: number = 0;
export let gears: number = 0;

// Check if user can spend.
// If yes, spend the amount of a specified resource, update its display and return true;
// If no, return false
export function trySpend(amount: number, type: ResourceType): boolean {
    switch (type) {
        case "Gears":
            if (gears >= amount) {
                gears -= amount;
                updateDisplayValue("Gears")
                return true;
            }
            break;
        case "Balance":
            if (balance >= amount) {
                balance -= amount;
                updateDisplayValue("Gears")
                return true;
            }
            break;
            default:
                return false;
    }
    return false;
}

// Way for other files to modify the balance
export function addBalance(value: number): void {
    balance += value * Multi;
    updateDisplayValue("Balance")
}

// Way for other files to modify the gears
export function addGears(value: number): void {
    gears += value * Multi;
    updateDisplayValue("Gears")
}

/*
export function applyBuyItemCash(value: number): void {
    balance -= value * Multi;
    updateDisplayValue("Balance")
}
*/
