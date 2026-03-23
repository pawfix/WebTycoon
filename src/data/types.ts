export type ResourceType = "Gears" | "Balance"
export type ShopItem = "Multi" | "Auto" | "Power" | "Speed" | "MoveSpeed" | "ProcessSpeed";

export function isResourceType(value:string):value is ResourceType {
    return value === "Gears" || value === "Balance";
}
