let bio = document.getElementById("profil")
let count = 1

let saya = document.getElementById("saya")


let judul = document.getElementById("judul")
let button_up = document.getElementById("button_up")


bio.addEventListener("click", function(event){

    if (count %2 == 0 && count <= 4) {
        bio.setAttribute("style", "background-color:#70b0e8; ")
    }
    else if (count %2 == 1 && count <= 5 ) {
        bio.setAttribute("style", "background-color:#68c0b8; ")
    }
    else if (count >=6){
        bio.setAttribute("style", "background-color:#e0b848; ")
    }
    console.log(count)
    count++
})

saya.addEventListener("mouseover", function(event){
    saya.setAttribute("style", "width:300px; margin-left: -35px;")
})

saya.addEventListener("mouseout", function(event){
    saya.setAttribute("style", "width:200px")
})

button_up.addEventListener("click", function(event){
    judul.scrollIntoView({behavior:'smooth'})
})

button_up.addEventListener("mouseover", function(event){
    button_up.setAttribute("style", "width: 50px; height: 50px; background-size: 50px 50px;")
})

button_up.addEventListener("mouseout", function(event){
    button_up.setAttribute("style", "width: 30px; height: 30px; background-size: 30px 30px;")
})
