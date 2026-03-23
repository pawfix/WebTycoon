import { addMovingBlock } from "./blocks";
import { ProcessSpeed, Power } from "../data/shop";
import { displayQueue } from "../ui/display";

let queueWaiting = 0;
let isProcessing = false;

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

function addToQueue(): void {
    if (!isProcessing) {
        isProcessing = true;
        processQueue();
    }
}

export function increaseQueue(amount: number): void {
    queueWaiting += amount;
    displayQueue(queueWaiting);
    processQueue();
}

export function initQueueButton(): void {
    document.getElementById("tempButton")?.addEventListener("click", () => {
        queueWaiting += Power;
        displayQueue(queueWaiting);
        addToQueue();
    });
}