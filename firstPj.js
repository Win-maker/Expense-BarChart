const mychart = document.querySelectorAll('.mychart');

const sun = document.querySelector('.fa-sun');

const barChart = document.querySelector('.barchart');

const total = document.querySelector('.total');

const line = document.querySelector('.line');

const myJson = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
];


//show chart when window loads with light or dark mode
window.addEventListener('load', () => {
   
  getDarkMode = localStorage.getItem('darkmode');
  if(getDarkMode === 'enabled') lightFun();
  else darkFun(); 

  for(let i=0;i<mychart.length;i++){
    mychart[i].style.height = `${myJson[i].amount* 3}px`;
    mychart[i].style.marginTop = '10px'; 
  };

//Change light or dark mode
isDark = true;
sun.addEventListener('click' , () => {
  if(isDark) darkFun()
  else lightFun();
}
);
});


// DarkMode Function
 function darkFun() {
  barChart.classList.add('dark');
  sun.classList.remove('fa-sun');
  sun.classList.add('fa-moon');
  line.style.backgroundColor = 'white';
  isDark = false;
  localStorage.setItem('darkmode',null);
 };

 //LightMode Function
 function lightFun() {
  sun.classList.add('fa-sun'); 
  sun.classList.remove('fa-moon');
  barChart.classList.remove('dark');
  line.style.backgroundColor = 'black';
  isDark = true;
  localStorage.setItem('darkmode','enabled');
 }

//Calculate total expense
for(let i=0; i<myJson.length;i++){
  let amount = 0;
  amount += myJson[i].amount;
  total.textContent = amount + ' ' + '$';   
}


