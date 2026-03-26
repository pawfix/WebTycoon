import {balance, gears} from "../logic/cash.ts";
import {isResourceType, type ResourceType} from "../data/types.ts";

// Update the value of users cash
export function updateDisplayValue(target: ResourceType) {
    if (!isResourceType(target)) return false;
    switch (target) {
        case "Gears":
            const userGridDisplay: HTMLElement | null = document.getElementById("userGridDisplay");
            if (userGridDisplay) {
                userGridDisplay.innerText = String(gears);
            }
            break;
        case "Balance":
            const userBalanceDisplay: HTMLElement | null = document.getElementById("userBalanceDisplay");
            if (userBalanceDisplay) {
                userBalanceDisplay.innerText = String(balance);
            }
            break;
        default:
            break;
    }
}

// Update the displayed value of the queue
export function displayQueue(queue: number): void {
    const el = document.getElementById("queueWaiting");
    if (el) {
        el.innerText = String(queue);
    }
}