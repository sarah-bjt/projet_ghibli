var quotes = [
    '"The wind is rising, we must try to live." - Jirô Horikoshi, The Wind Rises (2013)',
    '"True love is eternal... can\'t you feel it?" - Ashitaka, Princess Mononoke (1997)',
    '"The world is a mysterious place. It\'s full of secrets and magic, just waiting to be discovered." - Kiki, Kiki\'s Delivery Service (1989)',
    '"Even the smallest person can change the course of the future." - Sophie, Howl\'s Moving Castle (2004)'
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
    