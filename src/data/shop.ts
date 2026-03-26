import type {ShopItem} from "./types.ts";
import {addToLocalStorage} from "../logic/save.ts";
import {updateAllShopEntries} from "../ui/layout/shop.ts";

/*
    Here store data is managed, but also users inventory?
 */


// Set and export shop values. Also used as data.
export let Multi: number = 1;
export let Power: number = 1;
export let Auto: number = 0;
export let AutoSpeed:number = 10
export let MoveSpeed: number = 10;
export let ProcessSpeed: number = 10;

export function saveUserShop():void {
    addToLocalStorage("Multi", Multi)
    addToLocalStorage("Power", Power)
    addToLocalStorage("Auto", Auto)
    addToLocalStorage("AutoSpeed", AutoSpeed)
    addToLocalStorage("MoveSpeed", MoveSpeed)
    addToLocalStorage("ProcessSpeed", ProcessSpeed)
    console.log("Saved user shop...")
}

export function loadUserShop():void {
    Multi = Number(localStorage.getItem("Multi")) || 1;
    Power = Number(localStorage.getItem("Power")) || 1;
    Auto = Number(localStorage.getItem("Auto")) || 0;
    AutoSpeed = Number(localStorage.getItem("AutoSpeed")) || 10;
    MoveSpeed = Number(localStorage.getItem("MoveSpeed")) || 10;
    ProcessSpeed = Number(localStorage.getItem("ProcessSpeed")) || 10;
    console.log("Load User Shop...");
    updateAllShopEntries()
}

// Apply the changes to the items
export function applyBuyItemItem(item: ShopItem): void {
    switch (item) {
        case "Multi":
            Multi += .25;
            break;
        case "Auto":
            Auto++;
            break;
        case "Power":
            Power++;
            break;
        case "MoveSpeed":
            MoveSpeed -= 0.25;
            break;
        case "ProcessSpeed":
            ProcessSpeed -= 0.25;
            break;
        case "AutoSpeed":
            AutoSpeed -= 0.25;
            break;
        default:
            break;
    }
}