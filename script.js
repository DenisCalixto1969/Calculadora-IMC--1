const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
     event.preventDefault();
     const weigth = document.getElementById("weigth").value;
     const heigth = document.getElementById("heigth").value;

     const bmi = (weigth / (heigth * heigth)).toFixed(2);
     const value = document.getElementById('value');
     let description ='';

     value.classList.add('atencao');

     document.getElementById('infos').classList.remove('hidden');

     if (bmi < 18.5) {
        description = 'Cuidado! Voce esta abaixo do peso.'
     } else if (bmi >= 18.5 && bmi <= 25) {
      description = 'Parabens! Voce esta no peso ideal.'
      value.classList.remove('atencao')
      value.classList.add('normal')
     } else if (bmi >= 25 && bmi <= 30) {
      description = 'Cuidado! Voce esta com sobrepeso.'
     } else if (bmi >= 30 && bmi <= 35) {
      description = 'Cuidado! Voce esta com obesidade moderada.'
     } else if (bmi >= 35 && bmi <= 40) {
      description = 'Cuidado! Voce esta com obesidade severa.'
     } else {
      description = 'Cuidado!! Voce esta com obesidade morbida.'
     }
     
     value.textContent = bmi.replace('.',',');
     document.getElementById('description').textContent = description;
    });