const paymentMethod = document.getElementById('payment-method');
const paymentFields = document.querySelectorAll('.payment-fields');

paymentMethod.addEventListener('change', () => {
    paymentFields.forEach(field => {
        field.style.display = 'none';
    });

    const selectedFields = document.getElementById(`${paymentMethod.value}-fields`);
    selectedFields.style.display = 'block';
});