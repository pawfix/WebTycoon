import type {settings} from "../data/types.ts";

let settings: settings = {
    resolutionX: 1280,
    resolutionY: 720,
    background: "rgb(0, 0, 0)",
}


export function getSettings(): settings {
    return settings;
}

export function loadSavedSettings() {
    let localSettings: settings | null = localStorage.settings;
    if (localSettings === null || localSettings === undefined || !localSettings) {
        return;
    }
    console.log("Loading settings");
    applySettings(localSettings);
}

function setSettings(newSettings? : settings) {
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

function applySettings(newSettings : settings):boolean {
    console.log(newSettings);
    const app:HTMLElement | null = document.querySelector(".app")
    const body = document.body as HTMLElement

    if (!app) return false

    try{
            app.style.width = `${newSettings.resolutionX}px`;
            app.style.height = `${newSettings.resolutionY}px`;
            body.style.backgroundColor = newSettings.background;
    } catch (error) {
        console.log(error)
        return false;
    }

    console.log(newSettings);
    return true
}