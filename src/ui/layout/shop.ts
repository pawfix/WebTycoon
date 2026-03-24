import type {shopEntries} from "../../data/interfaces.ts";
import {Auto, AutoSpeed, MoveSpeed, Multi, Power, ProcessSpeed} from "../../data/shop.ts";
import type {ResourceType, shopEntry, ShopItem} from "../../data/types.ts";

// List of shop entries with its name, currency and price, acordingly to the ShopEntries interface
const shopItems: shopEntries[] = [
    {name: "Multi", currency: "Balance", price: (50 * Multi)},
    {name: "Power", currency: "Balance", price: (50 * Power)},
    {name: "Auto", currency: "Gears", price: (50 * ((Auto + 1) * 2))},
    {name: "MoveSpeed", currency: "Balance", price: (50 * (MoveSpeed / 2))},
    {name: "ProcessSpeed", currency: "Balance", price: (50 * (ProcessSpeed / 2))},
    {name: "AutoSpeed", currency: "Gears", price: (50 * (AutoSpeed / 2))},
];

// Gets the entries
export function getShopEntries() {
    for (let i = 0; i < shopItems.length; i++) {
        displayShopElement(shopItems[i])
    }
}

//TODO: Make the shop prices update on click/buy

// Display the shop
function displayShopElement(array: shopEntry) {
    const shopDiv = document.getElementById('shopDiv')

    const balanceShop: HTMLElement = document.createElement("div");
    balanceShop.classList.add("balance");

    const gearShop: HTMLElement = document.createElement("div")
    gearShop.classList.add("gear");


    shopDiv?.appendChild(createTheShopElement(array))

}

// Create elements for shop to display
function createTheShopElement(array: shopEntry): HTMLElement {
    const arrayName = array.name as ShopItem
    const arrayCurrency = array.currency as ResourceType
    const arrayPrice: number = array.price


    const element: HTMLElement = document.createElement("div");
    element.classList.add("shopDiv")
    element.dataset.itemtype = arrayName
    element.dataset.currency = arrayCurrency
    element.dataset.price = String(arrayPrice);

    const name: HTMLElement = document.createElement("p")
    name.textContent = `Buy: ${array.name}`;


    const price = document.createElement("p")
    price.textContent = `For: ${array.price}`;

    element.appendChild(price);
    element.appendChild(name)

    return element;
}