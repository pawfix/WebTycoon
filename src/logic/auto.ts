import {increaseQueue} from "../index.ts";
import {Auto, AutoSpeed} from "../data/shop.ts";

setTimeout(autoAddToQuery, AutoSpeed * 1000)

function autoAddToQuery():void {
    increaseQueue(Auto)
    debugger
}