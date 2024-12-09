const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})

const righthag = document.querySelector('.fa-angle-right')
const lefthag = document.querySelector('.fa-angle-left')
const imgnember = document.querySelectorAll('.slider-content-left-top img')
let index = 0
righthag.addEventListener("click", function(){
    index = index+1
    if(index>imgnember.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+ "%"
})
lefthag.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgnember.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+ "%"
})

const imgnemberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgnemberLi.forEach(function(img,index){
    img.addEventListener("click",function(){
        removactive ()
        document.querySelector(".slider-content-left-top").style.right = index * 100+ "%"
        img.classList.add("active")
    })
})
function removactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

function imgAuto () {
    index = index + 1
    if(index>imgnember.length-1){
        index=0
    }
    removactive ()
    document.querySelector(".slider-content-left-top").style.right = index * 100+ "%"
    imgnemberLi[index].classList.add("active")
}
setInterval(imgAuto,3000) 
//--------------slider product--------------------------
const righthagtwo = document.querySelector('.fa-angle-right-two')
const lefthagtwo = document.querySelector('.fa-angle-left-two')
const imgnembertwo = document.querySelectorAll('.slider-product-one-content-items')
// console.log(righthagtwo)
// console.log(lefthagtwo)
righthagtwo.addEventListener ("click", function(){
    index = index+1
    if(index>imgnembertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
lefthagtwo.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgnembertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
//-----------product two-------------------------//
const righthagone = document.querySelector('.fa-angle-right-one')
const lefthagone = document.querySelector('.fa-angle-left-one')
const imgnemberone = document.querySelectorAll('.product-gallery-slider-two-content-items')
// console.log(righthagone)
// console.log(lefthagone)
righthagone.addEventListener ("click", function(){
    index = index+1
    if(index>imgnemberone.length-1){
        index=0
    }
    document.querySelector(".product-gallery-slider-two-content-items-content").style.right = index * 100 + "%"
})
lefthagone.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgnemberone.length-1
    }
    document.querySelector(".product-gallery-slider-two-content-items-content").style.right = index * 100 + "%"
})