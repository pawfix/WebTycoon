import {balance, gears} from "../data/cash.ts";

export function updateDisplayValue(target: string) {
    switch (target) {
        case "Gears":
            const userGridDisplay:HTMLElement | null = document.getElementById("userGridDisplay");
            if (userGridDisplay) {
                userGridDisplay.innerText = String(gears);
            }
            break;
        case "Balance":
            const userBalanceDisplay:HTMLElement | null = document.getElementById("userBalanceDisplay");
            if (userBalanceDisplay) {
                userBalanceDisplay.innerText = String(balance);
            }
            break;
        default:
            break;
    }
}