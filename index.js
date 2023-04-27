const menuItems = document.querySelectorAll(".submenu-item")
const submenuTitles = document.querySelectorAll(".submenu .menu-title")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.add("show-submenu")
        menuItems.forEach((item2, index2) => {
            if(index !== index2) {
                item2.classList.remove("show-submenu")
            }
        })
    })
})

console.log(menuItems, submenuTitles);