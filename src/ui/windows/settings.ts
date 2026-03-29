import {getSettings} from "../../logic/settings.ts";

const box: HTMLElement | null = document.querySelector(".settings")

export function createSettings(): void {
    const mainBox: HTMLElement = createMainBox()

    box?.appendChild(mainBox)
    displaySettings()
}

function createMainBox(): HTMLElement {
    const mainBox: HTMLElement = document.createElement("div")
    mainBox.classList.add("settingsMainBox")
    mainBox.id = "mainBox"
    return mainBox
}

function displaySettings(): void {
    const settings = Object.entries(getSettings())
    settings.forEach(([key, value]) => {
        console.log(key, value);
    });
}