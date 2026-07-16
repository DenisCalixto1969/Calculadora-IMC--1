const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
     event.preventDefault();
     const weigth = document.getElementById("weigth").value;
     const heigth = document.getElementById("heigth").value;

     if (!weigth || !heigth) return;

     const bmi = (weigth / (heigth * heigth)).toFixed(2);
     const value = document.getElementById('value');
     const descContainer=document.getElementById('description');
     let description ='';
     
     value.className = '';
     descContainer.className ='';
     document.getElementById('infos').classList.remove('hidden');

     if (bmi < 18.5) {
        description  = 'Atenção! Voce esta abaixo do peso.'; 
        descContainer.classList.add('texto-alerta');
        value.classList.add('texto-alerta');

     } else if (bmi >= 18.5 && bmi <= 25) {
      description = 'Parabens *** Voce esta no peso ideal.'
      descContainer.classList.add('texto-sucesso');
        value.classList.add('texto-sucesso');
      
     } else if (bmi >= 25 && bmi <= 30) {
      description = 'Cuidado! Voce esta com sobrepeso.'
      descContainer.classList.add('texto-alerta'); 
      value.classList.add('texto-alerta');

     } else if (bmi >= 30 && bmi <= 35) {
      description = 'Cuidado!! Voce esta com obesidade moderada.'
      descContainer.classList.add('texto-perigo'); 
      value.classList.add('texto-perigo');
      

     } else if (bmi >= 35 && bmi <= 40) {
      description = 'Cuidado!!! Voce esta com obesidade severa.'
      descContainer.classList.add('texto-perigo'); 
      value.classList.add('texto-perigo');
      

     } else {
      description = 'Cuidado!!!! Voce esta com obesidade morbida.'
      descContainer.classList.add('texto-perigo'); 
      value.classList.add('texto-perigo');
    }
     
     value.textContent = bmi.replace('.',',');
     document.getElementById('description').textContent = description;
    });