import { autoAddToQuery } from "./logic/auto";
import { initQueueButton } from "./logic/queue";
import {getShopEntries} from "./ui/layout/shop.ts";

function init(): void {
    initQueueButton();
    autoAddToQuery();
    getShopEntries()
}

init();
