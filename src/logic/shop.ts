import "../data/cash.ts"
import {trySpend} from "../data/cash.ts";
import "../data/shop.ts"
import {applyBuyItemItem, isShopItem} from "../data/shop.ts";
import type {ShopItem} from "../data/types.ts";

let shopDivs: NodeListOf<HTMLElement> = document.querySelectorAll('.shopDiv')
let isPaymentProcessing: boolean = false;

shopDivs.forEach((element: HTMLElement) => {
    element.addEventListener("click", () => {

        if (isPaymentProcessing) return;

        isPaymentProcessing = true;

        tryToBuyItem(element);

        element.style.pointerEvents = "none";

        tryToBuyItem(element);

        setTimeout(() => {
            element.style.pointerEvents = "auto";
        }, 200);

        isPaymentProcessing = false;


    })
})

function tryToBuyItem(element:HTMLElement) {
    const shopItem: string = element.dataset.itemtype!

    if (!shopItem || !isShopItem(shopItem)) {
        console.error("Wrong shop item type!" + shopItem);
        return;
    }

    if (buyItem(shopItem, Number(element.dataset.price!))) {
        return;
    } else {
        element.style.animation = "failToBuyBlink 2s"
        setTimeout(() => {
            element.style.animation = ""
        }, 2000)
    }
}

function buyItem(item: ShopItem, price: number): boolean {
    if (!trySpend(price)) {
        console.log("Too poor to buy: " + item);
        return false;
    }

    applyBuyItemItem(item);
    console.log("Bought " + item);
    return true;
}
