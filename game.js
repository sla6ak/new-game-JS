const hero = document.getElementById("student");
const deadline = document.getElementById("deadline");

document.addEventListener("keydown", function (event) {
    jamp()
});
function jamp() {
    if (student.classList != "jamp") {
        student.classList.add("jamp")
    }
    setTimeout(function () {
        student.classList.remove("jamp")
    },1000)
}
let isAlive = setInterval(function () {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let deadlineLeft = parseInt(window.getComputedStyle(deadline).getPropertyValue("left"));
    if (deadlineLeft < 200 && deadlineLeft >=150 && heroTop >=300) {
        alert("Чтоб стать програмистом нельзя провалить дедлайн!!!!")
    }
});