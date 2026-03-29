import type {settings} from "../data/types.ts";

let settings: settings = {
    resolutionX: 1280,
    resolutionY: 720,
    background: "black"
}

export function getSettings(): settings {
    return settings;
}