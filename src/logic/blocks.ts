import { getBlock } from "../data/cash";
import {isResourceType, type ResourceType} from "../data/types";
import { MoveSpeed } from "../data/shop";

export function addMovingBlock(): void {
    const loader = document.getElementById("loader");

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

    loader?.appendChild(block);

    setTimeout(() => {
        const typeRaw = block.dataset.blockType;

        if (!typeRaw || !isResourceType(typeRaw)) {
            console.error("Unknown type " + typeRaw);
            return;
        }

        getBlock(Number(block.dataset.blockValue), typeRaw);
        block.remove();
    }, MoveSpeed * 1000);
}

function createBlockType(): number {
    return Math.floor(Math.random() * 100 + 1);
}

function createBlockValue(): number {
    return Math.floor(Math.random() * 5 + 1);
}