import {Auto, AutoSpeed} from "../data/shop.ts";
import {increaseQueue} from "../index.ts";


export function autoAddToQuery():void {
    setTimeout(() => {
        if (Auto > 0) {
            increaseQueue(Auto);
            console.log("Added to queue")
        }
        console.log("test")
        autoAddToQuery()
    }, AutoSpeed * 1000)
}