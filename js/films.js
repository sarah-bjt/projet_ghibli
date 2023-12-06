let i=0;  //pour itérer et switcher entre les deux propositions esthétiques
fetch('https://ghibliapi.dev/films')
    .then(response => response.json())
    .then(donnees => {
        let div_films = document.getElementById('contenant_films');
        donnees.forEach(film => {
            if(i%2==0){
                let new_film = document.createElement('div');
                new_film.classList.add('film');

                new_film.innerHTML += `<img class="affiches" src="${film.image}" alt="image ${film.title}"/>`;  
                new_film.innerHTML += `<div class="element_film"><h3>${film.title}</h3><p><b>Director : </b>${film.director}</p><p><b>Released Date : </b>${film.release_date}
                    </p><p>${film.description}</p></div>`;

                div_films.appendChild(new_film);
            }
            else {
                let new_film = document.createElement('div');
                new_film.classList.add('film');

                new_film.innerHTML += `<div class="element_film"><h3>${film.title}</h3><p><b>Director : </b>${film.director}</p><p><b>Released Date : </b>${film.release_date}
                    </p><p>${film.description}</p></div>`;
                new_film.innerHTML += `<img class="affiches" src="${film.image}" alt="image ${film.title}"/>`;  
            
                div_films.appendChild(new_film);
            }
            i++;
        })
});