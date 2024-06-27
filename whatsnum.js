'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const sumNumbers = [
  ["2","4","6","8","1"],["9","5","3","2","7"],["3","7","1","8","5"],
  ["6","1","5","7","2"],["8","4","3","9","6"],["7","3","8","1","5"],
  ["1","8","3","4","6"],["4","8","3","1","7"],["5","4","2","9","6"],
]

const numbers =["1","1","1","1","1"]
const numx = Math.floor(Math.random() * 8) + 0;
for (let i= 0;i < 5 ;i++) {
  numbers[i] = sumNumbers[numx][i];
}
//答えをコンソールに表示しておく
console.log(numbers);
let inCount = 0
let bothCorrect = 0
let numCorrect = 0
 function clickbutton() {
  inCount = inCount +1;
  bothCorrect = 0
  numCorrect = 0
  if (inCount <= 5) {
    // num1 の処理
    const texBox1 = document.getElementById("num1");
    const number1 =texBox1.value;
      for (let i= 0;i < 5;i++) {   //　num1 のチェック
        if (i === 0 ) {
          if (number1 === numbers[i])
            {
             bothCorrect=bothCorrect + 1; //数字、場所正解　
             numCorrect=numCorrect + 1; //数字も正解
            }
          } else if  (number1 === numbers[i])
            {
             numCorrect=numCorrect + 1; //数字も正解
            }
          }
      // num2 の処理
     const texBox2 = document.getElementById("num2");
     const number2 =texBox2.value;
  for (let i= 0; i < 5;i++) {   //　num2 のチェック
    if (i === 1 ) {
      if (number2 === numbers[i])
        {
         bothCorrect=bothCorrect + 1; //数字、場所正解　
         numCorrect=numCorrect + 1; //数字も正解
        }
      } else if  (number2 === numbers[i])
        {
        numCorrect=numCorrect + 1; //数字も正解
        }
      }
      // num3 の処理
     const texBox3 = document.getElementById("num3");
     const number3 =texBox3.value;
      for (let i= 0; i < 5;i++) {   //　num3 のチェック
        if (i === 2 ) {
          if (number3 === numbers[i])
            {
             bothCorrect=bothCorrect + 1; //数字、場所正解　
             numCorrect=numCorrect + 1; //数字も正解
            }
          } else if  (number3 === numbers[i])
            {
            numCorrect=numCorrect + 1; //数字も正解
            }
          }
  // num4 の処理
      const texBox4 = document.getElementById("num4");
     const number4 =texBox4.value;
      // console.log(number4);
      for (let i= 0; i < 5;i++) {   //　num4 のチェック
        if (i === 3 ) {
          if (number4 === numbers[i])
            {
             bothCorrect=bothCorrect + 1; //数字、場所正解　
             numCorrect=numCorrect + 1; //数字も正解
            }
          } else if  (number4 === numbers[i])
            {
            numCorrect=numCorrect + 1; //数字も正解
            }
          }
  // num5 の処理
      const texBox5 = document.getElementById("num5");
     const number5 =texBox5.value;
      // console.log(number5);
      for (let i= 0; i < 5;i++) {   //　num5 のチェック
        if (i === 4 ) {
          if (number5 === numbers[i])
            {
             bothCorrect=bothCorrect + 1; //数字、場所正解　
             numCorrect=numCorrect + 1; //数字も正解
            }
          } else if  (number5 === numbers[i])
            {
            numCorrect=numCorrect + 1; //数字も正解
            }
          }
  
    document.getElementsByTagName("p")[inCount].innerHTML =inCount+"回目   "
    +number1+"  "+number2+"  "+number3+"  "+number4+"  "+number5
    +" 数字と位置：　"+bothCorrect + "   数字：　" + numCorrect ;
    if (bothCorrect === 5){
      document.getElementsByTagName("p")[6].innerHTML ="正解です！　おめでとうございます。"
      inCount =0;
    }
    else if (inCount === 5){
      document.getElementsByTagName("p")[6].innerHTML ="残念！はずれです。"
      inCount = 0;
    }
  } 
   return;
 }
////////////////初期化処理　
function clear5(inCount) {
  inCount = 0
 for (let i=1;i<=5;i++){
   document.getElementsByTagName("p")[i].innerHTML =i+"回目";
  }
document.getElementsByTagName("p")[6].innerHTML ="数字を５つ入力して、try ボタンを押して下さい。"
//
let element1 = document.getElementById("num1");
 element1.value = "";
 let element2 = document.getElementById("num2");
 element2.value = "";
 let element3 = document.getElementById("num3");
 element3.value = "";
 let element4 = document.getElementById("num4");
 element4.value = "";
 let element5 = document.getElementById("num5");
 element5.value = "";
}
//ボタンクリック待ち
 const input5 = document.getElementById("btn1");
  input5.addEventListener("click",clickbutton);
const clernum = document.getElementById("btn0");
 clernum.addEventListener("click",clear5);
