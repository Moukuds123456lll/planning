function ajouterEvenement() {
    let prenomInput = document.getElementById('prenom');
    let typeSelect = document.getElementById('type');
    let jourSelect = document.getElementById('jour');
    
    let prenom = prenomInput.value.trim();
    let type = typeSelect.value;
    let jour = jourSelect.value;
  
    if (prenom) {
      let dayDiv = document.getElementById(jour);
      let p = document.createElement('p');
      p.textContent = `${prenom} (${type})`; // Modifiez cette ligne pour inclure le type
      
      switch(type) {
        case 'Présent':
          p.className = 'prenom-present';
          break;
        case 'Congé':
          p.className = 'prenom-conge';
          break;
        case 'Absence':
          p.className = 'prenom-absence';
          break;
      }
  
      dayDiv.appendChild(p);
      prenomInput.value = '';
    } else {
      alert('Veuillez entrer un prénom.');
    }
}
