import './css/style.css'
import './css/sanitize.css'

const dialog = document.querySelector('.dialog');
const city = document.querySelector('.header_location_city');

dialog.show()

const closeModal = document.querySelector('.header_modal_location_true');

closeModal.addEventListener('click', () => {
    dialog.close()
    localStorage.setItem('city', city.textContent)
});

const locationQuestion = document.querySelector('.header_modal_location_question')

if (localStorage.getItem('city')){
    locationQuestion.textContent = `Ваш регион ${localStorage.getItem('city')}?`
}

const template = document.querySelector('.template');
const changeCity = document.querySelector('.header_modal_location_change');
const chooseCity = document.querySelector('.choose_city');

chooseCity.appendChild(template.content.cloneNode(true));

changeCity.addEventListener('click', () => {
    chooseCity.showModal()
})

console.log(city.textContent);

chooseCity.onclick = () => {
    chooseCity.close()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const phoneInput = document.getElementById('phone_number');

phoneInput.addEventListener('focus', (e) => {
    e.target.value = '+7'
})

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('7')) {
        value = value.substring(1);
    }
    if (value.length > 10) {
        value = value.substring(0, 10);
    }

    let formatted = '+7';
    if (value.length > 0) {
        formatted += ` (${value.substring(0,3)}`;
    }
    if (value.length > 3) {
        formatted += `) ${value.substring(3,6)}`;
    }
    if (value.length > 6) {
        formatted += `-${value.substring(6,8)}`;
    }
    if (value.length > 8) {
        formatted += `-${value.substring(8,10)}`;
    }
    e.target.value = formatted;
});

document.querySelector('.up_button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})