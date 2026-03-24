export type ResourceType = "Gears" | "Balance"
export type ShopItem = "Multi" | "Auto" | "Power" | "Speed" | "MoveSpeed" | "ProcessSpeed" | "AutoSpeed";
export type shopEntry ={
    name: ShopItem,
    currency: ResourceType,
    price: number,
}

export function isResourceType(value: string): value is ResourceType {
    return value === "Gears" || value === "Balance";
}
