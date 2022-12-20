var cardsInfo = [
    {
        data: "02 de jul, 2021",
        title: "Agora é oficial: o Windows 11 está vindo",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus vel lacus pharetra porttitor sed a ante.Vivamus sem nibh, dapibus pretium elit vitae, fringilla porttitor sapien consectetur adipiscing elit.In ut lectus vel lacus"
    },
    {
        data: "02 de jul, 2021",
        title: "Tim Berners-Lee vai leiloar código-fonte da web",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non orci pretium, congue sapien vitae, tincidunt metus. Phasellus facilisis et nunc et sollicitudin. Sed bibendum ultrices augue quis lacinia. Donec sodales, ligula mattis vulputate tincidunt, massa arcu consequat diam, a tempus diam augue a risus. Donec sollicitudin nulla feugiat placerat condimentum. Quisque ornare nec nulla quis blandit. Suspendisse cursus ut ante ac tincidunt. sagittis lorem."
    },
    {
        data: "02 de jul, 2021",
        title: "Tem firefox novo no pedaço e voce vai querer migras",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus vel lacus pharetra porttitor"
    },
    {
        data: "02 de jul, 2021",
        title: "John McAfee, criador do antivirus McAfee, morre",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non orci pretium, congue sapien vitae, tincidunt metus. Phasellus facilisis et nunc et sollicitudin. Sed bibendum ultrices augue quis lacinia. Donec sodales, ligula mattis vulputate tincidunt, massa arcu consequat diam, a tempus diam augue a risus. Donec sollicitudin nulla feugiat placerat condimentum. Quisque ornare nec nulla quis blandit. Suspendisse cursus ut ante ac tincidunt. sagittis lorem."
    },

    {
        data: "02 de jul, 2021",
        title: "Agora é oficial: o Windows 11 está vindo",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus vel lacus pharetra porttitor sed a ante.Vivamus sem nibh, dapibus pretium elit vitae, fringilla porttitor sapien consectetur adipiscing elit.In ut lectus vel lacus"
    },
    {
        data: "02 de jul, 2021",
        title: "Tem firefox novo no pedaço e voce vai querer migras",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus vel lacus pharetra porttitor"
    },

]

function renderCards(){
    var mainContainer = $(".mainContainer");
    

    var cardDiv = document.createElement("div");
    var cardTop = document.createElement("div");
    var cardTopLeft = document.createElement("div");
    var cardTopRight = document.createElement("div");
    var cardBottom = document.createElement("div");
    cardDiv.classList.add("card");
    cardTop.classList.add("cardTop");
    cardTopLeft.classList.add("cardTopLeft");
    cardTopRight.classList.add("cardTopRight");
    cardBottom.classList.add("cardBottom");

    var dataSpan = document.createElement("span");
    var icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-heart");

    var title = document.createElement("h3");
    title.id = "cardBottomTitle";

    var textSpan = document.createElement("span");


    for(let card of cardsInfo){
        dataSpan.textContent = card.data;
        title.textContent = card.title;
        textSpan.textContent = card.text;
        console.log(card.title);
    }
    cardTopLeft.appendChild(dataSpan);
    cardTopRight.appendChild(icon);


    cardTop.appendChild(cardTopLeft);
    cardTop.appendChild(cardTopRight);

    cardBottom.appendChild(title);
    cardBottom.appendChild(textSpan);

    cardDiv.appendChild(cardTop);
    cardDiv.appendChild (cardBottom);

    console.log(cardDiv.classList);
    console.log(cardTop.classList , cardTop.innerHTML);
    console.log(cardBottom.classList, cardBottom.innerHTML);

    
    mainContainer.append(cardDiv);
}




$(document).ready(function(){

    renderCards()
    
  
  }); 