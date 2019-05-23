//wykres
new Chart(document.getElementById("myChart"), {
    type: "bar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [{
          label: "Signups",
          backgroundColor: "#38ada9",
          data: [133, 221, 283, 478, 576, 567, 444, 414, 266, 166]
        },
        {
          label: "FTD",
          backgroundColor: "#f8c291",
          data: [208, 147, 375, 134, 565, 555, 237, 444, 334, 276]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Earnings chart"
      }
    }
  });
