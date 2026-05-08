document.addEventListener("DOMContentLoaded", function () {
    const countEl = document.getElementById("count-el");
    let total = 0;

    const buttons = document.querySelectorAll(".money-btn");

    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const value = Number(btn.getAttribute("data-value"));
            total += value;
            countEl.textContent = "$" + total;
        });
    });
});
