
const block = document.querySelector('.block');
const btn = document.querySelector('#button')
console.log(block);
console.log(btn);

let position = 0;
let Oneposition = 0;
let Twoposition = 0;
let Treeposition = 0;


button.onclick = function move (){
  if (position <= 300) {
  position += 16;
  block.style.left = `${position}px`;
  setTimeout(move,70);
} else if (position >= 300 && Oneposition <= 390){
  Oneposition += 16;
  block.style.top = `${Oneposition}px`
  setTimeout(move,70);
} else if (Oneposition >= 390 && Twoposition <= 300){
  block.style.left = null;
  Twoposition += 16;
  block.style.right = `${Twoposition}px`
  setTimeout(move,70);
} else if (Twoposition >= 300 && Treeposition <= 390){
  block.style.top = null;
  Treeposition += 16;
  block.style.bottom = `${Treeposition}px`
  setTimeout(move,70);
}
}
move();



// button.onclick = function() {
//     let start = Date.now();

//     let timer = setInterval(function() {
//       let time = Date.now() - start;

//       block.style.left = time / 5 + 'px';

//       if (time > 2000) clearInterval(timer);

//     }, 0,1);
//   }






