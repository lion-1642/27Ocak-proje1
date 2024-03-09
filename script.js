// ! FİLTRELEME İŞLEMİ
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let searchTerm = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);
    for (let i = 0; i < cards.length; i++){
        let card = cards[i];  
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if (productName.includes(searchTerm)){
            card.style.display ="block";
        }else{
            card.style.display = "none";
        }
    }
})


// searchInput.addEventListener("keypress", function(e){
//     if(e.key =="Enter"){
//         e.preventDefault();
//         let searchTerm = searchInput.value.toLowerCase();

//     let cards = document.querySelectorAll(".col-6");
//     // console.log(cards);
//     for (let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLocaleLowerCase();

//         if (productName.includes(searchTerm)){
//             card.style.display ="block";
//         }else{
//             card.style.display = "none";
//         }
//     }

//     }

// })


// })

// searchBtn.addEventListener("click", function(){
//     // console.log(searchInput.value);
//     let searchTerm = searchInput.value.toLowerCase();

//     let cards = document.querySelectorAll(".col-6");
//     // console.log(cards);
//     for (let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLocaleLowerCase();

//         if (productName.includes(searchTerm)){
//             card.style.display ="block";
//         }else{
//             card.style.display = "none";
//         }
//     }
// })


// searchInput.addEventListener("keypress", function(e){
//     if(e.key =="Enter"){
//         e.preventDefault();
//         let searchTerm = searchInput.value.toLowerCase();

//     let cards = document.querySelectorAll(".col-6");
//     // console.log(cards);
//     for (let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLocaleLowerCase();

//         if (productName.includes(searchTerm)){
//             card.style.display ="block";
//         }else{
//             card.style.display = "none";
//         }
//     }

//     }

// })

// ! sepeti artırıp azalma secenekleri

const row = document.querySelector(".row");
const result = document.querySelector("#result");
const bilgiMesajı =document.querySelector("#bilgiMesajı");

row.addEventListener("click", function(e){
    // console.log(e.target);
    if (e.target.className.includes("add-to-card")){
        result.innerHTML++;
    }else if (e.target.className.includes("remove-to-card")){
        if(result.innerHTML != 0){
            result.innerHTML--;
        }
    }else if(e.target.className.includes("delete-to-card")){
        let col6 = e.target.parentElement.parentElement.parentElement;
        col6.style.display ="none";

        bilgiMesajı.innerHTML = "Ürün Başarı ile Silindi";
        bilgiMesajı.classList.add("text-success");
        bilgiMesajı.classList.add("text-center");
        bilgiMesajı.classList.add("fw-bold");

        setTimeout(function(){
            bilgiMesajı.classList.add("d-none");

        },2000)




    }

})

// !istediğim elemanı silmek

// row.addEventListener("click", function(e){
//     if(e.target.className.includes("remove-to.card")){
//         console.log(e.target.parentElement);
//     }

// })

// !markalar sekmesinde istediğim elemana göre filtreleme yapmak için

const renault = document.querySelector("#renault");
const tesla = document.querySelector("#tesla");
const toog = document.querySelector("#toog");

renault.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);
    for (let i = 0; i < cards.length; i++){
        let card = cards[i];  
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if (productName.includes("renault")){
            card.style.display ="block";
        }else{
            card.style.display = "none";
        }
    }
})
tesla.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);
    for (let i = 0; i < cards.length; i++){
        let card = cards[i];  
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if (productName.includes("tesla")){
            card.style.display ="block";
        }else{
            card.style.display = "none";
        }
    }
})
toog.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);
    for (let i = 0; i < cards.length; i++){
        let card = cards[i];  
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if (productName.includes("toog")){
            card.style.display ="block";
        }else{
            card.style.display = "none";
        }
    }
})

// ! bütün cart yapılarına bir tane sil butonu ekleyelim




