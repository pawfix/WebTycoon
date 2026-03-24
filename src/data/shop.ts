import type {ShopItem} from "./types.ts";

/*
    Here store data is managed, but also users inventory?
 */


// Set and export shop values. Also used as data.
export let Multi: number = 1;
export let Power: number = 1;
export let Auto: number = 0;
export let AutoSpeed:number = 10
export let MoveSpeed: number = 5;
export let ProcessSpeed: number = 4;


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