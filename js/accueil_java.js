var quotes = [
    '"The wind is rising, we must try to live." - Jirô Horikoshi, The Wind Rises (2013)',
    '"True love is eternal... can\'t you feel it?" - Ashitaka, Princess Mononoke (1997)',
    '"The world is a mysterious place. It\'s full of secrets and magic, just waiting to be discovered." - Kiki, Kiki\'s Delivery Service (1989)',
    '"Even the smallest person can change the course of the future." - Sophie, Howl\'s Moving Castle (2004)',
    '"Even in our world, sometimes there are things too amazing to believe, but that\'s the reality." - Fujimoto, Ponyo (2008)',
    '"You must believe in something before you can see it." - Nausicaä, Nausicaä of the Valley of the Wind (1984)',
    '"It\'s not about where you come from, but who you are." - Sheeta, Laputa: Castle in the Sky (1986)'
  ];
    
  var speed = 50; /* La durée de l'effet en millisecondes */
    
  function typeWriter() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var txt = quotes[randomIndex];
    
    var i = 0;
    
    function type() {
      if (i < txt.length) {
        document.getElementById("homepage_quotes").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    // Efface le contenu précédent
    document.getElementById("homepage_quotes").innerHTML = "";
    
    // Appelle la fonction type après un délai initial
    setTimeout(type, speed);
  }
    
  // Appel de la fonction typeWriter au chargement de la page
  window.addEventListener("load", typeWriter);
    