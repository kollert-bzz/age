function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    if (isNaN(birthdate.getTime())) {
        alert("Ungültiges Geburtsdatum. Bitte geben Sie ein gültiges Datum ein.");
        return;
    }

    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44;
    const ageInWeeks = ageInDays * 7;
    const ageInYears = ageInMonths / 12;

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <p>Alter:</p>
        <p>${Math.floor(ageInYears)} Jahre</p>
        <p>oder ${Math.floor(ageInMonths)} Monate</p>
        <p>oder ${Math.floor(ageInWeeks)} Wochen</p>
        <p>oder ${Math.floor(ageInDays)} Tage</p>
        <p>oder ${Math.floor(ageInHours)} Stunden</p>
        <p>oder ${Math.floor(ageInMinutes)} Minuten</p>
        <p>oder ${Math.floor(ageInSeconds)} Sekunden</p>
    `;

    const nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    if (birthdate.getMonth() === 1 && birthdate.getDate() === 29) {
        if (!isLeapYear(nextBirthday.getFullYear())) {
            nextBirthday.setDate(1);
            nextBirthday.setMonth(2);
        }
    }

    const timeUntilNextBirthday = nextBirthday - currentDate;
    const daysUntilNextBirthday = timeUntilNextBirthday / (1000 * 60 * 60 * 24);

    const detailContainer = document.getElementById('detail');
    detailContainer.innerHTML = `
        <p>Nächster Geburtstag in ${Math.ceil(daysUntilNextBirthday)} Tagen</p>
    `;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
