import {Auto, AutoSpeed} from "../data/shop.ts";
import { increaseQueue} from "./queue.ts";

/*
    Logic for the automatic worker
 */

// Add to queue every second for each AutoSpeed
export function autoAddToQuery():void {
    setTimeout(() => {
        if (Auto > 0) {
            increaseQueue(Auto);
        }
        autoAddToQuery()
    }, AutoSpeed * 1000)
}