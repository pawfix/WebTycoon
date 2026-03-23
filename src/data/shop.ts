import type {ShopItem} from "./types.ts";

export let Multi: number = 1;
export let Power: number = 1;
export let Auto: number = 5;
export let AutoSpeed:number = 10
export let MoveSpeed: number = 5;
export let ProcessSpeed: number = 4;

export function isShopItem(item: string): item is ShopItem {
    return item === "Multi" || item === "Auto" || item === "Power" || item === "MoveSpeed" || item === "ProcessSpeed" || item === "AutoSpeed";
}

export function applyBuyItemItem(item: ShopItem): void {
    switch (item) {
        case "Multi":
            Multi++;
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