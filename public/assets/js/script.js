// Méthode montrée par Thierry : 
// fetch('./public/assets/json/movies.json')
//     .then((response) => {
//         return response.json()
//     })

//     .then((datas) => {
//         console.log(datas)
//     })

async function afficherFilms() {
    const reponse = await fetch('./public/assets/json/movies.json');
    const data = await reponse.json();

    const films = data.results;

    const filmsList = document.getElementById('filmsList')

    films.forEach(film => {

        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2" + film.poster_path;
        img.addEventListener('click', function () {
            title.classList.toggle('active');
            date.classList.toggle('active');
            resume.classList.toggle('active');
        });

        // écouteurs avec la souris dessus et souris en dehors de l'image mais pas dingo niveau ux 
        // img.addEventListener('mouseenter', function () {
        //     title.classList.toggle('active');
        //     date.classList.toggle('active');
        //     resume.classList.toggle('active');
        // });
        // img.addEventListener('mouseleave', function () {
        //     title.classList.toggle('active');
        //     date.classList.toggle('active');
        //     resume.classList.toggle('active');
        // });

        div.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = film.title;
        title.classList.add('film-info');
        div.appendChild(title);

        const date = document.createElement('p');
        date.textContent = film.release_date;
        date.classList.add('film-info');
        div.appendChild(date);

        const resume = document.createElement('p');
        resume.textContent = film.overview;
        resume.classList.add('film-info');
        div.appendChild(resume);

        filmsList.appendChild(div);
    });
}

afficherFilms()