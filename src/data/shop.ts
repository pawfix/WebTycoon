export let Multi:number = 1;
export let Auto: number = 0;

export function applyBuyItemItem(item:string):void {
    switch (item) {
        case "Multi":
            Multi++;
            break;
        case "Auto":
            Auto++;
            break;
        default:
            break;
    }
}