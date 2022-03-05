
function heroinPindah(){
	for (let i = right-1; i > -200; i--) {
			setTimeout(function(){
				heroinKanan.setAttribute("style","right: " + right + "px")
				right--
				console.log(right)


			}, 20*i*-1);
			
		}
}


//animasi heroin kanan kerika di klik
let heroinKanan = document.getElementById("heroinKanan")
let countKlick = 0
heroinKanan.addEventListener('click',function(event){
	right1 = getComputedStyle(heroinKanan).right
	right = Number(right1[0])

	if (countKlick%2 == 0) {	
		heroinPindah()
	}
	countKlick ++
})

//focus list
let menuList = document.getElementById("list")
let list = document.getElementById("bagianList")
let marque = document.getElementById("marquee")
let panah = document.getElementById("panah")
menuList.addEventListener("click",function(event){
	right1 = getComputedStyle(heroinKanan).right
	right = Number(right1[0])
	heroinPindah()
	list.setAttribute("style","box-shadow: 50px 50px 100px 1500px white;")
	marquee.setAttribute("style","visibility: hidden;")
	panah.setAttribute("style","display: block;")
	list.scrollIntoView();
	setTimeout(backToNormal, 5000)

	function backToNormal(){
		list.setAttribute("style","box-shadow: null")
		marquee.setAttribute("style","visibility: visible;")
		panah.setAttribute("style","display: none;")
	}

	
	
})


//focus pembuat

let owner = document.getElementById("owner")
let pembuat = document.getElementById("pembuat")


owner.addEventListener("click",function(event){
	right1 = getComputedStyle(heroinKanan).right
	right = Number(right1[0])
	heroinPindah()
	pembuat.setAttribute("style","box-shadow: 50px 50px 100px 1500px white;")
	list.setAttribute("style","visibility: hidden;")
	marquee.setAttribute("style","visibility: hidden;")
	panah.setAttribute("style","display: block;")
	pembuat.scrollIntoView();
	setTimeout(backToNormal, 5000)


	function backToNormal(){
		pembuat.setAttribute("style","box-shadow: null")
		marquee.setAttribute("style","visibility: visible;")
		panah.setAttribute("style","display: none;")
		list.setAttribute("style","visibility: visible;")

	}

	
	
})

//update baru button
let updateTerbaru = document.getElementById("UpdateTerbaru")
updateTerbaru.addEventListener("click",function(event){
	location.reload();
	marquee.scrollIntoView();

})

//focus recomend
//let owner = document.getElementById("owner")
//let pembuat = document.getElementById("pembuat")
let menuRecomend = document.getElementById("rekomendasi")
let recomend = document.getElementById("bagianRekomendasi")

menuRecomend.addEventListener("click",function(event){
	recomend.scrollIntoView();

})

//klickbaca
let baca = document.getElementsByClassName("baca")
let chapter = document.getElementsByClassName("chapter")



baca[0].addEventListener("click",function(event){
	chapter[0].setAttribute("style","display: block;")	

})

baca[1].addEventListener("click",function(event){
	chapter[1].setAttribute("style","display: block;")

})

baca[2].addEventListener("click",function(event){
	chapter[2].setAttribute("style","display: block;")

})






