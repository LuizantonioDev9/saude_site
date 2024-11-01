const btn = document.querySelector("button");
const modal = document.querySelector("dialog");
const btnclose = document.querySelector("dialog button")

btn.onclick = function () {
    modal.showModal()
}

btnclose.onclick = function () {
    modal.close()
}