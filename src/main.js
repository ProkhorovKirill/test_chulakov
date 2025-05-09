const dialog = document.querySelector('.dialog');
const city = document.querySelector('.header_location_city');
const template = document.querySelector('.template');
const changeCity = document.querySelector('.header_modal_location_change');
const chooseCity = document.querySelector('.choose_city');

if (!localStorage.getItem('city')){
    dialog.show();
} else {
    city.textContent = localStorage.getItem('city');
}

const closeModal = document.querySelector('.header_modal_location_true');

closeModal.addEventListener('click', () => {
    dialog.close()
    localStorage.setItem('city', city.textContent)
});

chooseCity.appendChild(template.content.cloneNode(true));

changeCity.addEventListener('click', () => {
    chooseCity.showModal();
    dialog.close()
})
chooseCity.onclick = (e) => {
    if (!e.target.closest('li')) return;
    localStorage.setItem('city', e.target.textContent);
    chooseCity.close();
    setTimeout(() => {
        city.textContent = localStorage.getItem('city');
    }, 0);
}

const headerLocation = document.querySelector('.header_location');

headerLocation.addEventListener('click', () => {
    chooseCity.showModal();
})

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

const phoneNumber = document.querySelector('.phone_number_input');
const form = document.querySelector('.get_promocode');
const failedQuery = document.querySelector('.promocode_failed');
const successQuery = document.querySelector('.promocode_success');
const formSuccess = document.querySelector('.form_success');

form.addEventListener('submit', (e) => {
    if(localStorage.getItem('phoneNumber') == phoneNumber.value){
        e.preventDefault();
        failedQuery.classList.remove('promocode_failed--hidden');
    } else {
        e.preventDefault()
        localStorage.setItem('phoneNumber', phoneNumber.value);
        successQuery.classList.remove('promocode_success--hidden');
        formSuccess.classList.remove('form_success--hidden')
    }
})