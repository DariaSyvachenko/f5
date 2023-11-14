function validateForm() {
    var pib = document.getElementById('pib').value;
    var variant = document.getElementById('variant').value;
    var group = document.getElementById('group').value;
    var faculty = document.getElementById('faculty').value;
    var birthdate = document.getElementById('birthdate').value;

    // Регулярні вирази для перевірки введених даних
    var pibRegex = /^[А-ЯІЇЄ][а-яіїє']+ [А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/;
    var variantRegex = /^\d+$/;
    var groupRegex = /^[А-ЯІЇЄ]{2}-\d{2}$/;
    var facultyRegex = /^[А-ЯІЇЄ]{4}$/;
    var birthdateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

    // Перевірка валідності введених даних
    var isValid = true;
    if (!pibRegex.test(pib)) {
        document.getElementById('pib').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('pib').classList.remove('error');
    }

    if (!variantRegex.test(variant)) {
        document.getElementById('variant').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('variant').classList.remove('error');
    }

    if (!groupRegex.test(group)) {
        document.getElementById('group').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('group').classList.remove('error');
    }

    if (!facultyRegex.test(faculty)) {
        document.getElementById('faculty').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('faculty').classList.remove('error');
    }

    if (!birthdateRegex.test(birthdate)) {
        document.getElementById('birthdate').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('birthdate').classList.remove('error');
    }

    // Виведення результатів
    if (isValid) {
        var result = "ПІБ: " + pib + "\nВаріант: " + variant + "\nГрупа: " + group + "\nФакультет: " + faculty + "\nДата народження: " + birthdate;
        alert(result);
    }
}