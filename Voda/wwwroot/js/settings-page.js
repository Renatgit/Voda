document.getElementById('date-of-birth-change').addEventListener("click", showForm);
document.getElementById('email-change').addEventListener("click", showForm);
document.getElementById('goal-change').addEventListener("click", showForm);
document.getElementById('country-change').addEventListener("click", showForm);
document.getElementById('input-form-cross').addEventListener("click", showForm);

function showForm() {
    let form = document.getElementById('main-input-form-container');
    if (form.classList == 'information-enter-form-container') {
        form.classList.add('-active');
    }
    else {
        form.classList.remove('-active');
    }
}