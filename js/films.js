// async function afficherFilms() {
//     const reponse = await fetch("https://ghibliapi.dev/films");
//     const films = await reponse.json();
//     //console.log(films);
//     let table = "<div class='film'><tr><th>Title</th><th>Director</th><th>Released Date</th><th>Description</th></tr>";
//     let i;
//     for(i=0; i < films.length; i++){
//         table += "<tr><td>"
//         + films[i].getElementsByTagName("title") + "</td><td>"
//         + films[i].getElementsByTagName("director") + "</td><td>"
//         + films[i].getElementsByTagName("release_date") + "</td><td>"
//         + films[i].getElementsByTagName("description") +"</td></tr>";
//     }
//     table += "</div>"
//     document.getElementsByClassName('fond').innerHTML = table;
//   }

const films = await fetch("https://ghibliapi.dev/films");
  let table = "<div class='film'><tr><th>Title</th><th>Director</th><th>Released Date</th><th>Description</th></tr>";
    let i;
    for(i=0; i < films.length; i++){
        table += "<tr><td>"
        + films[i].getElementsByTagName("title") + "</td><td>"
        + films[i].getElementsByTagName("director") + "</td><td>"
        + films[i].getElementsByTagName("release_date") + "</td><td>"
        + films[i].getElementsByTagName("description") +"</td></tr>";
    }
    table += "</div>"
    document.getElementsByClassName('fond').innerHTML = table;
  //document.getElementsByClassName('film') = films;
  
  //afficherFilms();