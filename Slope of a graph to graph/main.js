let btnn = document.getElementById("callSlope");
const p = document.querySelector(".ans");

btnn.addEventListener("click", slope);

let x1 = 3,
  x2 = 4,
  y1 = 05,
  y2 = 6;

document.addEventListener("change", () => {
  x1 = document.getElementById("x1").value;
  x2 = document.getElementById("x2").value;
  y1 = document.getElementById("y1").value;
  y2 = document.getElementById("y2").value;

  let xAxis = [x1, x2];
  let sorted = xAxis.sort();
  const ctx = document.getElementById("myChart");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: sorted,
      datasets: [
        {
          label: "Line graph",
          data: [
            { x: x1, y: y1 },
            { x: x2, y: y2 },
          ],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: "",
          yAxisID: "left-y-axis",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            id: "left-y-axis",
            ticks: {
              beginAtZero: true,
              stepSize: 5,
            },
          },
        ],
        xAxes: [
          {
            type: 'linear',
          },
        ],
      },
      responsive: true,
    },
  });
});

function slope() {
  let top = y2 - y1;
  let bottom = x2 - x1;
  let slopee = top / bottom;
  console.log(slopee);

  p.textContent = slopee;
}
