document.addEventListener("DOMContentLoaded", function () {
    const expirationItems = [
        { name: "Milk", date: "2025-02-15" },
        { name: "Eggs", date: "2025-02-18" },
        { name: "Cheese", date: "2025-02-20" }
    ];

    const alertsTable = document.getElementById("alertsTable");

    expirationItems.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.date}</td>
            <td><button class="reminder-btn" onclick="setReminder('${item.name}', '${item.date}')">Set Reminder</button></td>
        `;

        alertsTable.appendChild(row);
    });
});

function setReminder(item, date) {
    const notificationPopup = document.getElementById("notificationPopup");
    const notificationText = document.getElementById("notificationText");

    notificationText.innerText = `Reminder set for ${item}, expiring on ${date}.`;
    notificationPopup.style.display = "block";

    setTimeout(() => {
        notificationPopup.style.display = "none";
    }, 3000);
}

function closeNotification() {
    document.getElementById("notificationPopup").style.display = "none";
}
