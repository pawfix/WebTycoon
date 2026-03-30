import "./cash.ts"
import {trySpend} from "./cash.ts";
import "../data/shop.ts"
import {applyBuyItemItem, Auto, AutoSpeed, MoveSpeed, Power, ProcessSpeed} from "../data/shop.ts";
import {isResourceType, isShopItem, type ResourceType, type ShopItem} from "../data/types.ts";
import {updateShopEntries} from "../ui/layout/shop.ts";

let isPaymentProcessing: boolean = false;

export function addShopListener(element: HTMLElement): void {
    element.addEventListener("click", () => {


        if (isPaymentProcessing) return;

        isPaymentProcessing = true;

        element.style.pointerEvents = "none";

        tryToBuyItem(element);

        setTimeout(() => {
            element.style.pointerEvents = "auto";
        }, 200);

        isPaymentProcessing = false;

        updateShopEntries(element)

    })
}

function tryToBuyItem(element: HTMLElement) {
    const shopItem: string = element.dataset.itemtype!
    const currency = element.dataset.currency as ResourceType;


    if (!shopItem || !isShopItem(shopItem)) {
        console.error("Wrong shop item type!" + shopItem);
        return;
    }
    if (!currency || !isResourceType(currency)) {
        console.error("Wrong currency: " + currency);
        return;
    }


    if (buyItem(shopItem, Number(element.dataset.price!), currency)) {
        return;
    } else {
        element.style.animation = "failToBuyBlink 2s"
        setTimeout(() => {
            element.style.animation = ""
        }, 2000)
    }
}

function buyItem(item: ShopItem, price: number, currency: ResourceType): boolean {
    if (!isNotMaxAmount(item)) {
        console.log(`You have max amount of ${item}`)
        return false;
    }

    if (!trySpend(price, currency)) {
        console.log(`Too poor to buy ${item} for ${price} of ${currency}`);
        return false;
    }

    applyBuyItemItem(item);
    console.log(`Bought ${item} for ${price} of ${currency}`);
    return true;
}

function isNotMaxAmount(item: ShopItem): boolean {
    console.log(`trying ${item}`)
    switch (item) {
        case "Auto":
            return Auto <= 2;
        case "Power":
            console.log(`trying ${item}`)
            return Power <= 500;
        case "MoveSpeed":
            return MoveSpeed >= .25;
        case "AutoSpeed":
            return AutoSpeed >= 0.5;
        case "ProcessSpeed":
            return ProcessSpeed >= 0.25;
        case "Multi":
            return true;
        default:
            return false;
    }
}