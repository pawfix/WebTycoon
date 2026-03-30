import { addMovingBlock } from "./blocks";
import { ProcessSpeed, Power } from "../data/shop";
import { displayQueue } from "../ui/display";

/*
    Here the Queue is processed
 */

// Setting an option for amount of items in queue, and a check if it being processed
let queueWaiting = 0;
let isProcessing = false;

// Process the queue by adding the block
function processQueue(): void {
    if (queueWaiting <= 0) {
        isProcessing = false;
        return;
    }

    queueWaiting--;
    addMovingBlock();
    displayQueue(queueWaiting);

    setTimeout(processQueue, ProcessSpeed * 100);
}

// Starts the queue if empty
function addToQueue(): void {
    if (!isProcessing) {
        isProcessing = true;
        processQueue();
    }
}

// Increases the queue amd starts it
export function increaseQueue(amount: number): void {
    queueWaiting += amount;
    displayQueue(queueWaiting);
    processQueue();
}

// Initialize the queue button
export function initQueueButton(): void {
    document.getElementById("queueButton")?.addEventListener("click", () => {
        queueWaiting += Power;
        displayQueue(queueWaiting);
        addToQueue();
    });
}