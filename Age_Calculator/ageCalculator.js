function calculateAge() {
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
    const resultDiv = document.getElementById('result');

    if (!dobInput.value) {
        resultDiv.textContent = 'Please enter a valid date.';
        resultDiv.style.color = 'red';
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 0) {
        resultDiv.textContent = 'Please enter a date before today.';
        resultDiv.style.color = 'red';
    } else {
        resultDiv.textContent = `Your age is ${age} years old.`;
        resultDiv.style.color = 'green';
    }
}
