const form = document.querySelector('.form-test-drive');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let data = {}
    let emptyForm = false;

    for (let { name, value } of form.elements) {
        if (name) { // отсекаем кнопку отправки
            data[name] = value;
            value = value.trim()
            if (value === '') emptyForm = true;
        } 
    }
        if (emptyForm) {
            alert('Заполните все поля!')
            form.reset()
      } else {
            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                return response.json()
            } else {
            throw new Error(response.status)
        }
        })

        .then(data => {
            alert('Данные успешно сохранены.')
            form.reset()
        })

        .catch(error => {
            alert('Приозошла ошибка, статус ' +error.message)
        })
    }
    
    
})