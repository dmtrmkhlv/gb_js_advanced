'use strict';
// Задание №1, Задание №2
let str = "Lorem, ipsum dolor sit amet aren't consectetur adipisicing elit. 'Alias quasi dolorum ipsa' voluptatem blanditiis perferendis 'repudiandae commodi laborum' culpa deserunt don't adipisci I'm laudantium hic consectetur ex delectus facilis neque, ullam quia";
let regexp1 = /'\s{1}/g;
let regexp2 = /\s{1}'/g;
let str2 = str.replace(regexp1, '" ').replace(regexp2, ' "');
console.log(str2);

// Задание №3
let $form = document.getElementById('form');

function testInput(elem, regexp) {
    if(!regexp.test(elem.value) || elem.value.length == 0){
        elem.classList.add('error');
        elem.nextElementSibling.style.display = "block";
        return;
     }
     elem.classList.remove('error');
     elem.nextElementSibling.style.display = "none";
}

$form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // testInput(e.target[0], /[a-z]+$/ig);
    testInput(e.target[0], /^[a-zA-Z]+$/);

    testInput(e.target[1], /\+\d{1}\(\d{3}\)\d{3}-\d{4}/);
    testInput(e.target[2], /^([a-z0-9]+)(\.?)(-?)([a-z0-9]+)@([a-z0-9]+)(\.?)(-?)([a-z0-9]+)\.([a-z\.?]{2,6})$/i);
});