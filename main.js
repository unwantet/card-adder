const wrapper = document.querySelector("#card-wrapper");
const txt = document.querySelector("#input-title");
const images = document.querySelector("#input-imges");
const btn = document.querySelector("#btn-add");
const btnEdit = document.querySelector(".btn-edit");
const btnDelete = document.querySelector(".btn-delete");
const carttxt = document.querySelector(".card-title");

function cards() {
    wrapper.style.display = "flex";
    let card = document.createElement("div");
    card.innerHTML = `<img class="card-images" src="${images.value}" alt="images topilamadi">
    <h1 class="card-txt">${txt.value}</h1>
    <button class="btn-edit">edit</button>
    <button class="btn-delete">delete</button>
    `;
    card.classList.add("card");
    wrapper.appendChild(card);
    txt.value = "";
    images.value = "";
}

btn.addEventListener("click", (e)=> {
    e.preventDefault();
    cards();
});

