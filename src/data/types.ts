/*
    Here are custom types
 */

export type ResourceType = "Gears" | "Balance" // Type for cash related values
export type ShopItem = "Multi" | "Auto" | "Power" | "Speed" | "MoveSpeed" | "ProcessSpeed" | "AutoSpeed"; // Type for shop items

// Check for data if it's a type of resource, and set it as ResourceType
export function isResourceType(value: string): value is ResourceType {
    return value === "Gears" || value === "Balance";
}

// Check if something is an item from shop, abd returns it as a Type of ShopItem
export function isShopItem(item: string): item is ShopItem {
    return item === "Multi" || item === "Auto" || item === "Power" || item === "MoveSpeed" || item === "ProcessSpeed" || item === "AutoSpeed";
}

export type settings = {
    resolutionX: resolutionX
    resolutionY: resolutionY
    background: background
}


export type BlockData = {
    element: HTMLElement;
    position: number;
    value: number;
    type: ResourceType;
};

export const resolutionXValues = [1280, 1920, 2560, 3840] as const;
export const resolutionYValues = [720, 1080, 1440, 2160] as const;
export const backgroundValues = ["rgb(0, 0, 0)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 255)", "rgb(172, 165, 5)"] as const;

export type resolutionX = typeof resolutionXValues[number];
export type resolutionY = typeof resolutionYValues[number];

export type background = typeof backgroundValues[number];