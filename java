document.getElementById("loadCrimesBtn").addEventListener("click", loadCrimes);
document.getElementById("addCrimeBtn").addEventListener("click", addCrime);

async function loadCrimes() {
    const response = await fetch("http://localhost:3000/get-crimes");
    const crimes = await response.json();

    const tableBody = document.querySelector("#crime-table tbody");
    tableBody.innerHTML = "";
    crimes.forEach(crime => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${crime.caseID}</td>
            <td>${crime.crimeType}</td>
            <td>${crime.location}</td>
            <td>${crime.date}</td>
            <td>${crime.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

async function addCrime() {
    const caseID = prompt("Enter Case ID");
    const crimeType = prompt("Enter Crime Type");
    const location = prompt("Enter Location");
    const date = prompt("Enter Date (YYYY-MM-DD)");
    const description = prompt("Enter Description");

    const crimeData = { caseID, crimeType, location, date, description };

    await fetch("http://localhost:3000/add-crime", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(crimeData),
    });

    loadCrimes();
}
