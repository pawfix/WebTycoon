let balance:number = 0;

export function getBlock(value:number):void {
    addBalance(value);
    //console.log(balance);
}

function addBalance(value:number):void {
    balance += value;
    const userBalanceDisplay:HTMLElement | null = document.getElementById("userBalanceDisplay");
    if (userBalanceDisplay) {
        userBalanceDisplay.innerText = String(balance);
    }
}