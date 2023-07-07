const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault()

        const sexo = document.getElementById('sexo').value
        const years = document.getElementById('years').value
        const height = document.getElementById('height').value


        document.getElementById('answer').classList.remove('hidden');

       let answer = ''

        if (sexo == 'Masculino' && years >= 20 && years <=29 && height == 150) {
            answer = ('Seu peso ideial é igual a 51.3kg')
        }

        else if (sexo == 'masculino' && years >= 20 && years <=29 && height == 150) {
            answer = ('Seu peso ideial é igual a 51.3kg')
        }

        else if (sexo == 'Masculino' && years >= 30 && years <=39 && height == 150) {
            answer = ('Seu peso ideial é igual a 56.7kg')
        }

        else if (sexo == 'masculino' && years >= 30 && years <=39 && height == 150) {
            answer = ('Seu peso ideial é igual a 56.7kg')
        }   

        else if (sexo == 'masculino' && years >= 40 && years <=49 && height == 150) {
            answer = ('Seu peso ideial é igual a 58.1kg')
        }

        else if (sexo == 'Masculino' && years >= 40 && years <=49 && height == 150) {
            answer = ('Seu peso ideial é igual a 58.1kg')
        }

        else if (sexo == 'masculino' && years >= 50 && years <=59 && height == 150) {
            answer = ('Seu peso ideial é igual a 58kg')
        }

        else if (sexo == 'Masculino' && years >= 50 && years <=59 && height == 150) {
            answer = ('Seu peso ideial é igual a 58kg')
        }

        else if (sexo == 'masculino' && years >= 60 && years <=69 && height == 150) {
            answer = ('Seu peso ideial é igual a 57.3kg')
        }

        else if (sexo == 'Masculino' && years >= 60 && years <=69 && height == 150) {
            answer = ('Seu peso ideial é igual a 57.3kg')
        }

        document.getElementById('answer').textContent = answer;
})