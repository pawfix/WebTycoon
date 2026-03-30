import {type ResourceType, type BlockData } from "../data/types";
import { MoveSpeed } from "../data/shop";
import { addBalance, addGears } from "./cash.ts";


/*
    Optimized logic for moving blocks
    Uses a single global animation loop, GPU transforms, object pooling
*/

const blockPool: HTMLElement[] = [];

// gets a block from the pool or creates a new one
function getBlockFromPool(): HTMLElement {
    if (blockPool.length > 0) {
        const element = blockPool.pop()!;
        element.style.display = "block";
        return element;
    }
    return createTheBlock();
}

// returns the block to the pool
function releaseBlock(element: HTMLElement) {
    element.style.display = "none";
    blockPool.push(element);
}


const blocks: BlockData[] = [];
let lastTime = performance.now();

// moves all blocks and checks when they reach the end
function gameLoop(currentTime: number) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    const distance = 1080;
    const speed = distance / MoveSpeed;

    for (let i = blocks.length - 1; i >= 0; i--) {
        const block = blocks[i];
        block.position += speed * deltaTime;

        block.element.style.transform = `translate3d(-${block.position}px, 0, 0)`;

        if (block.position >= distance) {
            getBlock(block.value, block.type);
            releaseBlock(block.element);
            blocks.splice(i, 1);
        }
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

// creates and adds a new moving block to the loader
export function addMovingBlock(): void {
    const loader = document.getElementById("loader");
    if (!loader) return;

    const element = getBlockFromPool();
    loader.appendChild(element);

    blocks.push({
        element,
        position: 0,
        value: Number(element.dataset.blockValue),
        type: element.dataset.blockType as ResourceType
    });
}

// gets the block and depending on its type it adds the amount of VALUE to the currency
export function getBlock(value: number, type: ResourceType): void {
    switch (type) {
        case "Gears":
            addGears(value);
            break;
        case "Balance":
            addBalance(value);
            break;
        default:
            console.log("Wrong type " + type);
    }
}

// creates the actual block with its data and styling
function createTheBlock(): HTMLElement {
    const element = document.createElement("div");
    element.classList.add("moving-block");
    element.style.position = "absolute";
    element.style.right = "0vw";
    element.style.willChange = "transform";

    element.dataset.blockValue = String(createBlockValue());

    const typeValue = createBlockType();

    if (typeValue <= 25) {
        element.dataset.blockType = "Gears" as ResourceType;
        element.style.backgroundColor = "red";
    } else {
        element.dataset.blockType = "Balance" as ResourceType;
        element.style.backgroundColor = "green";
    }

    return element;
}

// creates a type for the block by getting a number 0 - 100
function createBlockType(): number {
    return Math.floor(Math.random() * 100 + 1);
}

// creates a value for the block
function createBlockValue(): number {
    return Math.floor(Math.random() * 5 + 1);
}