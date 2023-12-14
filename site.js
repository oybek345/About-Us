let s = document.getElementById("btn1");
let a = document.getElementById("btn2");
let x = document.getElementById("btn3");

s.addEventListener("click", () => {
    s.classList.add("active");
    a.classList.remove("active");
    x.classList.remove("active");
})

let e = document.getElementById("ddd")
let w = document.getElementById("www")
let z = document.getElementById("zzz")
function say() {
    e.style.display = "block";
    w.style.display = "none";
    z.style.display = "none";
}
function say1() {
    w.style.display = "block";
    e.style.display = "none";
    z.style.display = "none";
}
function say2() {
    z.style.display = "block";
    w.style.display = "none";
    e.style.display = "none";
}
