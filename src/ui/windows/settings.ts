import setSettings, {getSettings} from "../../logic/settings.ts";
import {backgroundValues, resolutionXValues, resolutionYValues, type settings} from "../../data/types.ts";
import {goToView} from "./windows.ts";

const box: HTMLElement | null = document.querySelector(".settings")

export function createSettings(): void {
    const mainBox: HTMLElement = createMainBox()

    mainBox.appendChild(displaySettings())

    box?.appendChild(mainBox)
}

function createMainBox(): HTMLElement {
    const mainBox: HTMLElement = document.createElement("div")
    mainBox.classList.add("settingsMainBox")
    mainBox.id = "mainBox"
    mainBox.style.width = "100%"
    mainBox.style.height = "100%"
    mainBox.style.backgroundColor = "white"
    return mainBox
}

function displaySettings(): HTMLElement {
    const settings = Object.entries(getSettings())
    const wrapper: HTMLElement = document.createElement("div")
    settings.forEach(([key]) => {
        wrapper.appendChild(createSetting(key))
    });

    const applyButton: HTMLElement = document.createElement("button")
    applyButton.classList.add("applyButton")
    applyButton.id = "applyButton"
    applyButton.innerText = "Apply"
    applyButton.addEventListener("click", () => {
        sendSetSettings()
    })

    const goBackButton: HTMLElement = document.createElement("button")
    goBackButton.id = "goToMain"
    goBackButton.className = "window"
    goBackButton.innerText = "Go Back"
    goBackButton.addEventListener("click", () => {
        goToView(goBackButton.id)
    })

    wrapper.appendChild(applyButton)
    wrapper.appendChild(goBackButton)
    wrapper.style.display = "flex"
    wrapper.style.flexDirection = "column"
    wrapper.style.justifyContent = "center"
    wrapper.style.alignItems = "center"

    return wrapper
}

function createSetting(name: string): HTMLElement {

    const wrapper = document.createElement("div")
    const select = document.createElement("select")
    select.id = name
    select.name = name

    const currentSettings = getSettings()

    let options: readonly (number | string)[];

    switch (name) {
        case "resolutionX":
            options = resolutionXValues;
            break;
        case "resolutionY":
            options = resolutionYValues;
            break;
        case "background":
            options = backgroundValues;
            break;
        default:
            options = []
            break;
    }

    for (const value of options) {
        const option = document.createElement("option")
        option.innerText = String(value)
        option.value = String(value)

        if (String(currentSettings[name as keyof settings]) === String(value)) {
            option.selected = true
        }

        select.appendChild(option)
    }

    const label = document.createElement("label")

    label.htmlFor = name
    label.innerText = name

    wrapper.appendChild(select)
    wrapper.appendChild(label)

    return wrapper;
}

function sendSetSettings(): void {
    const resolutionX: HTMLSelectElement | null = document.querySelector("#resolutionX")
    const resolutionY: HTMLSelectElement | null = document.querySelector("#resolutionY")
    const background: HTMLSelectElement | null = document.querySelector("#background")

    const settings = {
        resolutionX: Number(resolutionX?.value),
        resolutionY: Number(resolutionY?.value),
        background: background?.value,
    } as settings
    console.log(settings)
    setSettings(settings)
}