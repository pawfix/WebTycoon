import { autoAddToQuery } from "./logic/auto";
import { initQueueButton } from "./logic/queue";
import {getShopEntries} from "./ui/layout/shop.ts";


// Init the app.
// ==============================
// initQueueButton() adds the click event listener to the queue button
// autoAddToQuery() starts the timer that checks if you have auto, and if yes starts the auto worker
// getShopEntries() displays the shop
// ==============================
function init(): void {
    initQueueButton();
    autoAddToQuery();
    getShopEntries()
}

// Runs the init
init();
