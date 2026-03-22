import { getBlock } from "./data/cash.ts";

function addMovingBlock(): void {
    const loader = document.getElementById("loader");

    const block = document.createElement("div");
    block.classList.add("moving-block");
    block.style.display = "block";
    block.style.position = "absolute";
    block.style.right = "0vw"

    block.id = String(createBlockValue())

    const typeValue:number = createBlockType()
    if (typeValue <= 25) {
        block.innerText = "Gears"
    } else if (typeValue > 25) {
        block.innerText = "Balance"
    } else {
        console.log(`Wrong block type: ${typeValue}`);
    }

    loader?.appendChild(block);

    setTimeout((): void => {
        getBlock(Number(block.id), block.innerText);
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
    displayQueue()
    setTimeout(processQueue, 400);
}
function createBlockType():number {
    return Math.floor((Math.random() * 100) + 1);
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
    displayQueue()
    //console.log(queueWaiting);
    addToQueue();
})

function displayQueue(): void {
    const queueDisplay:HTMLElement | null = document.getElementById("queueWaiting");
    if (queueDisplay) {
        queueDisplay.innerText = String(queueWaiting);
    }
}