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
        <p>Alter: ${Math.floor(ageInYears)} Jahre</p>
        <p>${Math.floor(ageInMonths)} Monate</p>
        <p>${Math.floor(ageInWeeks)} Wochen</p>
        <p>${Math.floor(ageInDays)} Tage</p>
        <p>${Math.floor(ageInHours)} Stunden</p>
        <p>${Math.floor(ageInMinutes)} Minuten</p>
        <p>${Math.floor(ageInSeconds)} Sekunden</p>
    `;

    const nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < currentDate){
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
        if (isLeapYear(currentDate.getFullYear() + 1)) {
            nextBirthday.setDate(nextBirthday.getDate() + 1);
        }
    }




    const timeUntilNextBirthday = nextBirthday - currentDate;
    const daysUntilNextBirthday = timeUntilNextBirthday / (1000 * 60 * 60 * 24);

    const detailContainer = document.getElementById('detail')
    detailContainer.innerHTML = `
    <p>Nächster Geburtstag in ${Math.ceil(daysUntilNextBirthday)} Tagen</p>
    `

}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}