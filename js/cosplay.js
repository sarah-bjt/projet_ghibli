
fetch('https://ghibliapi.dev/people')
    .then(response => response.json())
    .then(donnees => {
        let div_persos = document.getElementById('contenant_persos');
        donnees.forEach(persos => {
            let new_character = document.createElement('div');
            new_character.classList.add('persos');

            new_character.innerHTML += `<div class="element_persos"><h3>${persos.name}</h3><p><b>Gender : </b>${persos.gender}</p><p><b>Age : </b>${persos.age}
                </p><p><b>Eye Color : </b>${persos.eye_color}</p><p><b>Hair Color : </b>${persos.hair_color}</p></div>`;

            div_persos.appendChild(new_character);

        })
});