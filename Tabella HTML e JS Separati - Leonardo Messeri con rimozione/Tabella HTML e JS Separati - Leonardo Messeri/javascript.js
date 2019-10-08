function aggiungi() {
  var table = document.getElementById("tabella");
  var row = table.insertRow(0); //aggiungo una riga
  var cell1 = row.insertCell(0);//aggiungo la prima cella
  var cell2 = row.insertCell(1);//aggiungo la seconda cella
  var cell3 = row.insertCell(2);//aggiungo la terza cella
  cell1.innerHTML = "<br><div class='form-group'><label for='Nome'>Nome</label><input type='Nome' placeholder='Inserisci qui'/></div>";//inserisco il form
  cell2.innerHTML = "<br><div class='form-group'><label for='Cognome'>Cognome</label><input type='Cognome' placeholder='Inserisci qui'/></div>";
  cell3.innerHTML = "<br><div class='form-group'><label for='Data'>Data di nascita</label><input type='GG' placeholder='GG' style='width:50px'>-<input type='MM' placeholder='MM' style='width:50px'>-<input type='AAAA' placeholder='AAAA' style='width:50px'>";
}

function rimuovi() {
  var tab = document.getElementById("tabella");
  var tr = tab.getElementsByTagName("tr");
      tr[0].remove();
}
