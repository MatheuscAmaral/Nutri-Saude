const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

        const weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value;

        height = height / 100;
        const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

        value.classList.add('attention')
        document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = ('Abaixo do Peso');
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        description = ('Peso normal');
        value.classList.remove('attention')
        value.classList.add('normal')
    }
    else if (bmi >= 24.9 && bmi < 29.9) {
        description = ('Pré-obesidade');
    }
    else if (bmi >= 29.9 && bmi < 34.9) {
        description = ('Obesidade grau 1');
    }
    else if (bmi >= 34.9 && bmi < 39.9) {
        description = ('Obesidade grau 2');
    }
    else {
        description = ('Obesidade grau 3')
    }


     value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});
