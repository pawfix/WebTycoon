import { getBlock } from "./data/cash.ts";

function addMovingBlock(): void {
    const loader = document.getElementById("loader");

    const block = document.createElement("div");
    block.classList.add("moving-block");
    block.style.display = "block";
    block.style.position = "absolute";
    block.style.right = "0vw"

    block.id = String(createBlockValue())

    loader?.appendChild(block);

    setTimeout((): void => {
        getBlock(Number(block.id));
        block.remove();
    }, 5000);
}

let queueWaiting: number = 0;

let isProcessing = false;

function processQueue(): void {
    if (queueWaiting <= 0) {
        isProcessing = false;
        return;
    }

    queueWaiting--;
    addMovingBlock();

    setTimeout(processQueue, 400);
}

function createBlockValue():number {
    return Math.floor((Math.random() * 5) + 1);
}

function addToQueue(): void {
    if (!isProcessing) {
        isProcessing = true;
        processQueue();
    }
}

document.getElementById("tempButton")?.addEventListener('click', () => {
    queueWaiting++;
    const queueDisplay:HTMLElement | null = document.getElementById("queueWaiting");
    if (queueDisplay) {
        queueDisplay.innerText = String(queueWaiting);
    }
    //console.log(queueWaiting);
    addToQueue();
})