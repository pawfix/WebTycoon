import {createSettings} from "./settings.ts";

export function initWindows(): void {
    document.querySelectorAll(".window").forEach(v => {
        v.addEventListener("click", () => {
            goToView(v.id)
        })
    })

    createSettings()
}

export function goToView(target: string): void {

    const views: NodeListOf<Element> = document.querySelectorAll(".view")

    views.forEach(v => {
        v.classList.remove("active")
        v.classList.add("exit-left")
    })


    const next = document.querySelector(`.${target}`)!
    next.classList.add("active")
    next.classList.remove("exit-left")
}
