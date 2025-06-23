document.getElementById('weddingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // зупинити стандартну відправку

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('entry.1031567434');
    const attending = formData.get('entry.2076572209');
    const drinks = formData.getAll('entry.1995553056'); // кілька чекбоксів!

    console.log('Імʼя:', name);
    console.log('Рішення:', attending);
    console.log('Напої:', drinks);
    // Заміни YOUR_FORM_ID на свій
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSdIAu5GLKJSmZWux3r55bPaQa__X6RGo0U9s8hkdvQssCkpYw/formResponse';

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        document.getElementById('successAlert').classList.remove('d-none');
        setTimeout(() => {
            document.getElementById('successAlert').classList.add('d-none');
            console.log('delete alert');
        }, 5000);
        form.reset();
    }).catch(err => {
        console.error(err);
        alert('Сталася помилка. Спробуйте ще раз.');
    });
});