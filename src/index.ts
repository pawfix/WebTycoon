import { autoAddToQuery } from "./logic/auto";
import { initQueueButton } from "./logic/queue";

function init(): void {
    initQueueButton();
    autoAddToQuery();
}

init();