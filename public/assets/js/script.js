async function afficherFilms() {
    const reponse = await fetch('./public/assets/json/movies.json');
    const data = await reponse.json();

    const films = data.results;

    const filmsList = document.getElementById('filmsList')

    films.forEach(film => {

        const flipContainer = document.createElement('div');
        flipContainer.classList.add('flip-container');

        const flipper = document.createElement('div');
        flipper.classList.add('flipper');

        const front = document.createElement('div');
        front.classList.add('front');

        const img = document.createElement('img');
        img.src = 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + film.poster_path;

        front.appendChild(img);

        const back = document.createElement('div');
        back.classList.add('back');

        const title = document.createElement('h2');
        title.textContent = film.title;
        back.appendChild(title);

        const date = document.createElement('p');
        date.textContent = film.release_date;
        back.appendChild(date);

        const resume = document.createElement('p');
        resume.textContent = film.overview;
        back.appendChild(resume);

        flipper.appendChild(front);
        flipper.appendChild(back);
        flipContainer.appendChild(flipper);
        filmsList.appendChild(flipContainer);
    });
}

afficherFilms();
