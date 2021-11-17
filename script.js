const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.hamburger img');
const mainPage = document.querySelector('section');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    // toggle close icon
    if(sidebar.classList.contains('active')) {
        menuIcon.src = './icons/close.svg';
    } else {
        menuIcon.src = './icons/hamburger.svg';
    }
});

mainPage.addEventListener('click', () => {
    sidebar.classList.remove('active');
    // change menuicon
    menuIcon.src = './icons/hamburger.svg';
});

// chart
var xValues = [0,'Jan','Feb','Mar','Apr','May'];
var yValues = [7,6.4,8.3,9,8.5,9,9.9];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "#1175f6",
      borderColor: "#a32eb3",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:9.5}}],
    }
  }
});