const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calc(btn){
    // btn == 클릭 이벤트가 발생한 버튼 요소

    // 현재 input 요소에 작성된 값을 얻어와 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    // 클릭된 버튼에 작성된 내용을 얻어옴
    // + - * / %
    const op = btn.innerText;

    switch(op){
        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;
    }
}