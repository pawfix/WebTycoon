import {autoAddToQuery} from "./logic/auto";
import {initQueueButton} from "./logic/queue";
import {getShopEntries} from "./ui/layout/shop.ts";
import {initSave} from "./logic/save.ts";
import {initWindows} from "./ui/windows/windows.ts";


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
    initSave()
    initWindows()
}

// Runs the init
init();
