import {type settings} from "../data/types.ts";

let settings: settings = {
    resolutionX: 1280,
    resolutionY: 720,
    background: "rgb(0, 0, 0)",
}


export function getSettings(): settings {
    return settings;
}

export function loadSavedSettings() {
    const raw = localStorage.getItem("settings")

    if (!raw) return

    console.log("Loading settings")

    try {
        const data = JSON.parse(raw)

        const settings: settings = {
            resolutionX: Number(data.resolutionX) || 1280,
            resolutionY: Number(data.resolutionY) || 720,
            background: typeof data.background === "string" ? data.background : "black"
        }

        applySettings(settings)
    } catch (error) {
        console.error("Invalid settings in localStorage", error)
    }
}

function setSettings(newSettings?: settings) {
    //const app = document.querySelector(".app") as HTMLElement;
    let localSettings: settings | null = localStorage.settings;

    if (!newSettings) return

    if (localSettings === null || localSettings === undefined) {
        console.log("LocalSettings not set");
        localStorage.setItem("settings", JSON.stringify(settings));
    }


    if (!applySettings(newSettings)) {
        return
    } else {
        localStorage.setItem("settings", JSON.stringify(newSettings));
    }


}

export default setSettings

function applySettings(newSettings: settings): boolean {
    console.log("ARG:", newSettings)

    console.log(Object.keys(newSettings))
    console.log(Object.getOwnPropertyDescriptors(newSettings))

    if (!newSettings) {
        console.error("newSettings is UNDEFINED")
        return false
    }

    if (
        newSettings.resolutionX === undefined ||
        newSettings.resolutionY === undefined ||
        newSettings.background === undefined
    ) {
        console.error("Missing values:", newSettings)
        return false
    }

    const root: HTMLElement = document.documentElement;

    const width = newSettings.resolutionX
    const height = newSettings.resolutionY
    const bg = newSettings.background

    console.log("VALUES:", width, height, bg)

    root.style.setProperty('--app-height', `${height}px`)
    root.style.setProperty('--app-width', `${width}px`)
    root.style.setProperty('--background-color', bg)

    return true
}