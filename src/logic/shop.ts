import "../data/cash.ts"
import "../data/shop.ts"
import {applyBuyItemCash, balance} from "../data/cash.ts";
import {applyBuyItemItem, isShopItem} from "../data/shop.ts";
import type {ShopItem} from "../data/types.ts";

let shopDivs: NodeListOf<HTMLElement> = document.querySelectorAll('.shopDiv')
let isPaymentProcessing: boolean = false;

shopDivs.forEach((element: HTMLElement) => {
    element.addEventListener("click", () => {

        if (isPaymentProcessing) {
            console.log("Payment processing");
            element.style.animation = "failToBuyShake 2s"
            setTimeout(() => {
                element.style.animation = ""
            }, 2000)
            return;
        } else if (!isPaymentProcessing) {
            isPaymentProcessing = true;
            tryToBuyItem(element);
            setTimeout(() => {

                isPaymentProcessing = false;
            }, 500)
            return;
        }

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
    console.log("Trying to buy: " + item);
    switch (item) {
        case "Multi":
            if (price <= balance) {
                applyBuyItemCash(price)
                applyBuyItemItem(item)
                console.log("Bought " + item)
                //console.log(Multi)
                return true;
            } else {
                console.log("Too poor to buy: " + item);
                return false;
            }
        case "Auto":
            if (price <= balance) {
                applyBuyItemCash(price)
                applyBuyItemItem(item)
                console.log(item)
                return true;
            } else {
                console.log("Too poor to buy: " + item);
                return false;
            }
        case "Power":
            if (price <= balance) {
                applyBuyItemCash(price)
                applyBuyItemItem(item)
                console.log(item)
                return true;
            } else {
                console.log("Too poor to buy: " + item);
                return false;
            }
        case "MoveSpeed":
            if (price <= balance) {
                applyBuyItemCash(price)
                applyBuyItemItem(item)
                console.log(item)
                return true;
            } else {
                console.log("Too poor to buy: " + item);
                return false;
            }
        case "ProcessSpeed":
            if (price <= balance) {
                applyBuyItemCash(price)
                applyBuyItemItem(item)
                console.log(item)
                return true;
            } else {
                console.log("Too poor to buy: " + item);
                return false;
            }
        default:
            console.error("Unknown item type " + item);
            return false;
    }
}
