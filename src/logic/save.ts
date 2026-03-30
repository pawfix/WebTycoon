import {loadCash, saveUserCash} from "./cash.ts";
import {loadUserShop, saveUserShop} from "../data/shop.ts";

export function initSave(): void {
    const loadSaveButton = document.getElementById('loadSaveButton');
    const saveSaveButton = document.getElementById('saveSaveButton');

    loadSaveButton?.addEventListener('click', () => {
        loadCash("Balance");
        loadCash("Gears")
        loadUserShop()
    })
    saveSaveButton?.addEventListener('click', () => {
        saveUserCash()
        saveUserShop()
    })
}

export function addToLocalStorage(name: string, data: number | string): void {
    localStorage.setItem(name, String(data));
    console.log("Adding local storage...");
}