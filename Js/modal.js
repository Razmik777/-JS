const modalBtns = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const btnDesignItem = document.querySelector('.design-list__item');
const formModal = document.querySelector('.modal__form');

modalBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})
    
modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')){
        modal.classList.add('hidden')
    }
})

formModal.addEventListener('submit', (event) => {
    event.preventDefault()

    let data = {}
    let emptyForm = false;

    for (let { name, value } of formModal.elements) {
        if (name) { // отсекаем кнопку отправки
            data[name] = value;
            value = value.trim()
            if (value === '') emptyForm = true;
        } 
    }
        if (emptyForm) {
            alert('Заполните все поля!')
            forformModalm.reset()
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
            formModal.reset()
        })

        .catch(error => {
            alert('Приозошла ошибка, статус ' + error.message)
        })
    }
})