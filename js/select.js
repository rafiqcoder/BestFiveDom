/** CARD OBJECT STARTS */
let AlexObj = {
    name: "Alex Ovechkin",
    btnId: "alex",
    imgUrl: "img/hockey1.jpg"
};
let AustonObj = {
    name: "Auston Mathews",
    btnId: "auston",
    imgUrl: "img/hockey2.jpg"
};
let StanleyObj = {
    name: "Staneley",
    btnId: "staneley",
    imgUrl: "img/hockey3.jpg"
};
let SideneyObj = {
    name: "Sideney Crosby",
    btnId: "sideney",
    imgUrl: "img/hockey4.jpg"
};
let ConnorObj = {
    name: "Connor McDavid",
    btnId: "connor",
    imgUrl: "img/hockey5.jpg"
};
let VictorObj = {
    name: "Victor Hedman",
    btnId: "victor",
    imgUrl: "img/hockey6.jpg"
};
let PatrikObj = {
    name: "Patrik",
    btnId: "patrik",
    imgUrl: "img/hockey7.jpg"
};
let NikitaObj = {
    name: "Nikita Kucherov",
    btnId: "Nikita",
    imgUrl: "img/hockey8.jpg"
};
let MarioObj = {
    name: "Mario Lemieux",
    btnId: "Mario",
    imgUrl: "img/hockey9.jpg"
};
/** CARD OBJECT FINISHED */




let noLi = 1; /* noLi = number of li on selecting player */
function displayCards(card) {
    let container = document.getElementById('card_container');
    let div = document.createElement('div');

    /* injecting card Html dynamically */
    div.innerHTML =
        `
        <div class="card border-2 shadow-md bg-gray-900 rounded-xl overflow-hidden text-white">
        <img src=${card.imgUrl} alt="footballer" class="w-full">
        <div class="card-text text-center">
          <h1 class="card-title sm:text-3xl text-xl font-semibold mb-4 mt-4">
           ${card.name}
          </h1>
          <button id=${card.btnId} class="btn bg-blue-500 hover:bg-orange-600 p-2 px-9 text-white text-xl font-semibold mb-6 rounded-lg uppercase"
            disabled>Select</button>
        </div>
      </div>
  `;

    container.appendChild(div); /** injected cards in card container div */
    document.getElementById(card.btnId).removeAttribute('disabled');

    /* created li to inject in ul after selecting player */
    let ul = document.getElementById('selected_ul');
    let li = document.createElement('li');



    /** FUNCTION TO SELECT PLAYER AND ADD TO SELECTED LIST */
    document.getElementById(card.btnId).addEventListener('click', function () {
        li.innerHTML = `<li class="py-2">${noLi + ". " + card.name}</li>`;

        if (noLi <= 5) {
            noLi = noLi + 1; /**counting or increment per click or selecting player */
            ul.appendChild(li);
            /** changing button behavior after selecting player */
            document.getElementById(card.btnId).setAttribute('disabled', true);
            document.getElementById(card.btnId).style.background = 'gray';
            document.getElementById(card.btnId).innerText = 'SELECTED';
            document.getElementById(card.btnId).style.color = 'black';
            document.getElementById(card.btnId).setAttribute('disabled', true);

        } else {
            /** alert for validation */
            alert('you cannot add more then 5 players');
        }
    });
}

/** CALLING FUNCTIONS WITH CARD OBJECTS TO INJECT CARDS IN CARD CONTAINER */
displayCards(AlexObj);
displayCards(AustonObj);
displayCards(StanleyObj);
displayCards(SideneyObj);
displayCards(ConnorObj);
displayCards(VictorObj);
displayCards(PatrikObj);
displayCards(NikitaObj);
displayCards(MarioObj);


