import {isResourceType, type ResourceType} from "../data/types";
import { MoveSpeed } from "../data/shop";
import {addBalance, addGears} from "../data/cash.ts";

/*
    Logic for the block
    Creates it and sets it values, to be later read.
 */

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

// Create the moving block
export function addMovingBlock(): void {
    const loader = document.getElementById("loader");
    const block = createTheBlock();

    loader?.appendChild(block);

    let position = 0;
    let lastTime = performance.now();

    const distance = 1080; // px
    const speedPerSecond = distance / MoveSpeed; // px per second

    function move(currentTime: number) {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        position += speedPerSecond * deltaTime;

        block.style.transform = `translateX(-${position}px)`;

        if (position >= distance) {
            const typeRaw = block.dataset.blockType;

            if (!typeRaw || !isResourceType(typeRaw)) {
                console.error("Unknown type " + typeRaw);
                block.remove();
                return;
            }

            getBlock(Number(block.dataset.blockValue), typeRaw);
            block.remove();
            return;
        }

        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);
}

// Create the actual block with its data and styling
function createTheBlock(): HTMLElement {
    const block = document.createElement("div");
    block.classList.add("moving-block");
    block.style.position = "absolute";
    block.style.right = "0vw";
    block.style.animation = `moveLeft ${MoveSpeed}s linear forwards`;

    block.dataset.blockValue = String(createBlockValue());

    const typeValue:number = createBlockType();

    if (typeValue <= 25) {
        block.dataset.blockType = "Gears" as ResourceType;
        block.style.backgroundColor = "red";
    } else {
        block.dataset.blockType = "Balance" as ResourceType;
        block.style.backgroundColor = "green";
    }
    return block;
}

// Create a type for the block by geting a number 0 - 100
function createBlockType(): number {
    return Math.floor(Math.random() * 100 + 1);
}

// Create a value for the block
function createBlockValue(): number {
    return Math.floor(Math.random() * 5 + 1);
}