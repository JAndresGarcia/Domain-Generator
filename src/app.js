window.addEventListener("DOMContentLoaded", () => {
  function pagina() {
    let pronoun = ["the", "our", "we"];
    let adj = ["great", "big", "love"];
    let noun = ["jogger", "racoon", "pdf"];

    let dominio = "";
    for (let a = 0; a < pronoun.length; a++) {
      for (let b = 0; b < adj.length; b++) {
        for (let c = 0; c < noun.length; c++) {
          dominio =
            dominio + "<li>" + pronoun[a] + adj[b] + noun[c] + ".com</li>";
        }
      }
    }
    return dominio;
  }
  document.getElementById("dominios").innerHTML = pagina();
});
