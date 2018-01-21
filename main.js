let barChart = document.getElementById('barChart').getContext('2d')

let mainChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W','T','F','S'],
    datasets: [{
      data: [50, 100, 175, 150, 250, 225, 100]
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'DAILY TRAFFIC'
    },
    legend: {
      display: false
    },
    scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       }

  }
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Desktop','Mobile','Tablet'],
        datasets: [{
            data: [15, 15 , 75],
            backgroundColor: [
              '#6099AF',
              '#78C9A6',
              '#65619E',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
         responsive: true,
         maintainAspectRatio: false,
         title: {
           display: true,
           text: 'DAILY TRAFFIC'
         },
         legend: {
             display: true,
             position: 'right',
             labels: {
                 boxWidth: 15,
                 padding: 20,
             }
         },
     }
});

var ctx = document.getElementById("lineChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'users',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750],
            backgroundColor: [
              'rgba(226, 227, 244, 0.7)'
            ],
            borderColor: [
                'rgba(226, 227, 244, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
             display: false,
         },
     }
});
