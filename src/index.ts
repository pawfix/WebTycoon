import {getBlock} from "./data/cash.ts";
import {isResourceType} from "./data/types.ts";
import {Power, MoveSpeed} from "./data/shop.ts";

function addMovingBlock(): void {
    const loader = document.getElementById("loader");

    const block = document.createElement("div");
    block.classList.add("moving-block");
    block.style.display = "block";
    block.style.position = "absolute";
    block.style.right = "0vw"
    block.style.animation = `moveLeft ${MoveSpeed}s linear forwards`

    block.dataset.blockValue! = String(createBlockValue())

    const typeValue:number = createBlockType()
    if (typeValue <= 25) {
        block.dataset.blockType! = "Gears"
    } else if (typeValue > 25) {
        block.dataset.blockType! = "Balance"
    } else {
        console.log(`Wrong block type: ${typeValue}`);
    }

    if (block.dataset.blockType! === "Gears") {
        block.style.backgroundColor = "red";
    } else if (block.dataset.blockType! === "Balance") {
        block.style.backgroundColor = "green";
    } else {
        console.log(`Wrong block type: ${block.dataset.blockType!}`);
    }

    loader?.appendChild(block);

    setTimeout((): void => {
        const typeRaw = block.dataset.blockType!;
        if (!typeRaw || !isResourceType(typeRaw)) {
            console.error("Unknown type" + typeRaw);
            return;
        }

        getBlock(Number(block.dataset.blockValue!), typeRaw);
        block.remove();
    }, (MoveSpeed * 1000));
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
    queueWaiting += Power;
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