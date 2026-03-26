import "../data/cash.ts"
import {trySpend} from "../data/cash.ts";
import "../data/shop.ts"
import {applyBuyItemItem} from "../data/shop.ts";
import {isResourceType, isShopItem, type ResourceType, type ShopItem} from "../data/types.ts";
import {updateShopEntries} from "../ui/layout/shop.ts";

let shopDivs: NodeListOf<HTMLElement> = document.querySelectorAll('.shopDiv')
let isPaymentProcessing: boolean = false;

shopDivs.forEach((element: HTMLElement) => {
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
})

function tryToBuyItem(element:HTMLElement) {
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
    if (!trySpend(price, currency)) {
        console.log(`Too poor to buy ${item} for ${price} of ${currency}`);
        return false;
    }

    applyBuyItemItem(item);
    console.log(`Bought ${item} for ${price} of ${currency}`);
    return true;
}
