function calculateAge() {
    // Geburtsdatum aus dem Eingabefeld erhalten
    var birthdateInput = document.getElementById('birthdate');
    var birthdate = new Date(birthdateInput.value);

    // Aktuelles Datum erhalten
    var currentDate = new Date();

    // Altersberechnung
    var ageInMilliseconds = currentDate - birthdate;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInMonths = ageInDays / 30.44; // Durchschnittliche Anzahl von Tagen pro Monat
    var ageInYears = ageInMonths / 12;

    // Ergebnis auf der Seite anzeigen
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <p>Alter: ${Math.floor(ageInYears)} Jahre</p>
        <p>${Math.floor(ageInMonths)} Monate</p>
        <p>${Math.floor(ageInDays)} Tage</p>
        <p>${Math.floor(ageInHours)} Stunden</p>
        <p>${Math.floor(ageInMinutes)} Minuten</p>
        <p>${Math.floor(ageInSeconds)} Sekunden</p>
    `;
}
