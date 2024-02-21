let nalert = document.querySelector("#alert");
let nalertt = document.querySelector("#alertt");

let show = document.querySelector(".alertb")
let rshow = document.querySelector(".alertmspan")


nalert.addEventListener("click", () => {
    show.classList.add("show")
})

nalertt.addEventListener("click", () => {
    show.classList.add("show")
})

rshow.addEventListener("click", () => { show.classList.remove("show") })

