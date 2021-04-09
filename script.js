'use strict';
const playground = document.querySelector('#playground');
const btn = document.querySelector('BUTTON');
const cells = document.querySelectorAll('.pixel');
let previous = 'o';
let clicks = 0;
let indexes = [0,0,0,0,0,0,0,0,0];
const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [0,4,8],
    [2,4,6]
];
function win(e){
    e.forEach((i)=>{
        cells.forEach((cell)=>{
            if (cell.dataset.x === i.toString()){
                cell.classList.add('red')
            }
        })
    });
    playground.removeEventListener('click', add)
}
function add(e){
    let sum = 0;

    if (e.target.classList.contains('pixel')){
        let x = +e.target.dataset.x;
        if (!e.target.innerHTML){
            if(previous === 'o'){
                e.target.innerHTML = 'x';
                previous = 'x';
                indexes[x] = 1
            } else {
                e.target.innerHTML = 'o';
                previous = 'o';
                indexes[x] = 11
            }
            clicks ++;
        }
        if (clicks>4){
            console.log('aaa');
            wins.forEach(elem=>{
                sum = 0;
                elem.forEach((el)=>{
                    sum+=indexes[el];
                    if(sum===3){
                        win(elem);
                    }else if (sum === 33){
                        win(elem)
                    }
                });
            })
        }
    }
}
btn.addEventListener('click',()=>{
    cells.forEach((e)=>{
        e.innerHTML = '';
        previous = 'o';
        e.classList.remove('red')
    });
    playground.addEventListener('click', add);
    clicks = 0;
    indexes = [0,0,0,0,0,0,0,0,0]
});

playground.addEventListener('click', add);
