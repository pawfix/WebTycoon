import type {ResourceType, ShopItem} from "./types.ts";

/*
Storage for interfaces.
Ensures a proper format for data
 */

// Format for shop entries
// Specifies the item from ShopEntries, currency from ResourceType and the price.
export interface shopEntries {
    name: ShopItem;
    currency: ResourceType;
    price: number;
}

