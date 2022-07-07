let bList = document.getElementById("blist");
let bListMenu = document.getElementById("bListMenu");


bList.addEventListener('click', (e) => {
    e.preventDefault();
    bListMenu.classlist.toggle("show");
}
)

const btn = document.getElementById('button');
const cardWrapper = document.getElementById('card-wrapper');


const showSearch = [];


const getTvShow = async (query) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    // const url = ' https://api.tvmaze.com/schedule/full';
    await fetch(url)


        .then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .then(data => { showSearch.push(data); }) //api data will be visible in your browser console. 

        .catch(err => console.warn("ERROR", err));

    console.log(showSearch);
};

getTvShow("friends");

btn.addEventListener("click", () => {
    showSearch.forEach(x => {
        x.forEach(y => {
            let image = document.createElement('img');
            image.classList.add('img-wrapper');
            cardWrapper.appendChild(image);
            console.log(x[0].show.image.medium);

            if (y.show.image != null) {
                image.style.background = `url(${y.show.image.medium})`;
                console.log('working');
            }
            else {
                image.style.background = `url('noImage.jpg')`
            }
        })

    })


})