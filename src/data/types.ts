
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