function sum(ids) {
  return ids.reduce((total, id) => {
    return total + (parseInt(document.getElementById(id).value) || 0);
  }, 0);
}

// Auto-calculate totals
document.addEventListener("input", () => {
  document.getElementById("thuAttendanceTotal").value =
    sum(["thuMale","thuFemale","thuHeritage","thuFirst"]);

  document.getElementById("thuOfferingTotal").value =
    sum(["thuFree","thuTithe","thuThanks"]);

  document.getElementById("sunAttendanceTotal").value =
    sum(["sunMale","sunFemale","sunHeritage","sunFirst"]);

  document.getElementById("sunOfferingTotal").value =
    sum(["sunFree","sunTithe","sunThanks"]);
});

function submitReport() {
  const status = document.getElementById("statusMessage");
  status.innerText = "Submitting report...";

  const url = "https://script.google.com/macros/s/AKfycbxS1W4yo63BtfM2KryRLFTllIafzJXZpim8_rKQMAAMo6F-X-24tr4bOTVmd724VU4NdQ/exec";

  const data = {
    branch: document.getElementById("branch").value,
    weekEnding: document.getElementById("weekEnding").value,
    pastorName: document.getElementById("pastorName").value,

    thuMale: document.getElementById("thuMale").value,
    thuFemale: document.getElementById("thuFemale").value,
    thuHeritage: document.getElementById("thuHeritage").value,
    thuFirst: document.getElementById("thuFirst").value,
    thuNew: document.getElementById("thuNew").value,
    thuAttendanceTotal: document.getElementById("thuAttendanceTotal").value,

    thuFree: document.getElementById("thuFree").value,
    thuTithe: document.getElementById("thuTithe").value,
    thuThanks: document.getElementById("thuThanks").value,
    thuOfferingTotal: document.getElementById("thuOfferingTotal").value,

    sunMale: document.getElementById("sunMale").value,
    sunFemale: document.getElementById("sunFemale").value,
    sunHeritage: document.getElementById("sunHeritage").value,
    sunFirst: document.getElementById("sunFirst").value,
    sunNew: document.getElementById("sunNew").value,
    sunAttendanceTotal: document.getElementById("sunAttendanceTotal").value,

    sunFree: document.getElementById("sunFree").value,
    sunTithe: document.getElementById("sunTithe").value,
    sunThanks: document.getElementById("sunThanks").value,
    sunOfferingTotal: document.getElementById("sunOfferingTotal").value
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    status.innerText = "Report submitted successfully.";
  })
  .catch(error => {
    status.innerText = "Submission failed. Please check internet and try again.";
    console.error(error);
  });
}
