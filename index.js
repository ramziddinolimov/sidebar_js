const sidebar = document.querySelector(".sidebar")
const sidebarClose = document.querySelector("#sidebar-close")
const menuItems = document.querySelectorAll(".submenu-item")
const menu = document.querySelector(".menu-content")
const submenuTitles = document.querySelectorAll(".submenu .menu-title")

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"))

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        menu.classList.add("submenu-active")
        item.classList.add("show-submenu")
        menuItems.forEach((item2, index2) => {
            if(index !== index2) {
                item2.classList.remove("show-submenu")
            }
        })
    })
})

submenuTitles.forEach((title) => {
    title.addEventListener("click", () => {
        menu.classList.remove("submenu-active")
    })
})

console.log(menuItems, submenuTitles);