
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");

    // Ensure all items start as closed
    items.forEach(item => {
        const content = item.querySelector(".content");
        const icon = item.querySelector(".title span");

        item.classList.remove("active");
        content.style.display = "none";
        icon.textContent = "+";
    });

    items.forEach(item => {
        const title = item.querySelector(".title");
        const content = item.querySelector(".content");
        const icon = title.querySelector("span");

        title.addEventListener("click", () => {
            // Close all items except the clicked one
            items.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                    i.querySelector(".content").style.display = "none";
                    i.querySelector(".title span").textContent = "+";
                }
            });

            // Toggle the clicked item
            const isActive = item.classList.contains("active");

            if (isActive) {
                item.classList.remove("active");
                content.style.display = "none";
                icon.textContent = "+";
            } else {
                item.classList.add("active");
                content.style.display = "flex"; 
                icon.textContent = "-";
            }
        });
    });
});
