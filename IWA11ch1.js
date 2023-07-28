// script.js

const root1 = document.getElementById('order1');
const biscuits1 = document.getElementById('biscuits1');
const donuts1 = document.getElementById('donuts1');
const pancakes1 = document.getElementById('pancakes1');
const status1 = document.getElementById('status1');

const root2 = document.getElementById('order2');
const biscuits2 = document.getElementById('biscuits2');
const donuts2 = document.getElementById('donuts2');
const pancakes2 = document.getElementById('pancakes2');
const status2 = document.getElementById('status2');

const root3 = document.getElementById('order3');
const biscuits3 = document.getElementById('biscuits3');
const donuts3 = document.getElementById('donuts3');
const pancakes3 = document.getElementById('pancakes3');
const status3 = document.getElementById('status3');

biscuits1.value = root1.biscuits.value;
donuts1.value = root1.donuts.value;
pancakes1.value = root1.pancakes.value;
status1.value = root1.status.checked ? 'Delivered' : 'Pending';

biscuits2.value = root2.biscuits.value;
donuts2.value = root2.donuts.value;
pancakes2.value = root2.pancakes.value;
status2.value = root2.status.checked ? 'Delivered' : 'Pending';

biscuits3.value = root3.biscuits.value;
donuts3.value = root3.donuts.value;
pancakes3.value = root3.pancakes.value;
status3.value = root3.status.checked ? 'Delivered' : 'Pending';