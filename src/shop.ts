import "./data/cash.ts"
import "./data/shop.ts"
import {applyBuyItemCash, balance} from "./data/cash.ts";
import {applyBuyItemItem, Multi} from "./data/shop.ts";

let shopDivs:NodeListOf<HTMLElement> = document.querySelectorAll('.shopDiv')

shopDivs.forEach((element:HTMLElement) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].innerHTML.slice(5));
        buyItem(element.children[0].innerHTML.slice(5), Number(element.children[1].innerHTML.slice(6)))
    })
})

function buyItem(item:string, price: number):boolean {
    console.log("Trying to buy: " + item);
    switch (item) {
        case "Multi":
            if (price <= balance) {
                applyBuyItemCash(price)
                applyBuyItemItem(item)
                console.log(item)
                console.log(Multi)
                return true;
            } else {
                console.log("Too poor to buy: " + item);
                return false;
            }
        case "Auto":
            if (price < balance) {
                applyBuyItemCash(price)
                applyBuyItemItem(item)
                console.log(item)
                return true;
            } else {
                console.log("Too poor to buy: " + item);
                return false;
            }

            default:
                return false;
    }
}
