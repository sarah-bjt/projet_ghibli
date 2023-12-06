// const films = await fetch("https://ghibliapi.dev/films");
//   let table = "<div class='film'><tr><th>Title</th><th>Director</th><th>Released Date</th><th>Description</th></tr>";
//     let i;
//     for(i=0; i < films.length; i++){
//         table += "<tr><td>"
//         + films[i].getElementsById("title") + "</td><td>"
//         + films[i].getElementsById("director") + "</td><td>"
//         + films[i].getElementsById("release_date") + "</td><td>"
//         + films[i].getElementsById("description") +"</td></tr>";
//     }
//     table += "</div>"
//     document.getElementsByClassName('contenant_films').innerHTML = table;
  //document.getElementsByClassName('film') = films;
let i=0;
fetch('https://ghibliapi.dev/films').then(response => response.json()).then(donnees => {
    let div_films = document.getElementById('contenant_films');
    donnees.forEach(film => {
        if(i%2==0){
            let new_film = document.createElement('div');
            new_film.classList.add('film');

            new_film.innerHTML += `<img class="affiches" src="${film.image}" alt="image ${film.title}"/>`;  //height="15%" width="15%"   <div id="photo"></div>
            new_film.innerHTML += `<div class="element_film"><h3>${film.title}</h3><p><b>Director : </b>${film.director}</p><p><b>Released Date : </b>${film.release_date}
                </p><p>${film.description}</p></div>`;

            div_films.appendChild(new_film);
        }
        else {
            let new_film = document.createElement('div');
            new_film.classList.add('film');

            new_film.innerHTML += `<div class="element_film"><h3>${film.title}</h3><p><b>Director : </b>${film.director}</p><p><b>Released Date : </b>${film.release_date}
                </p><p>${film.description}</p></div>`;
            new_film.innerHTML += `<img class="affiches" src="${film.image}" alt="image ${film.title}"/>`;  //height="15%" width="15%"   <div id="photo"></div>
            
            div_films.appendChild(new_film);
        }
        i++;
    })
});