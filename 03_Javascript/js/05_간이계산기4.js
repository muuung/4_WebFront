const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calc(btn){
    // btn == 클릭 이벤트가 발생한 버튼 요소

    if(num1.value != "" && num2.value != "") {
        // 현재 input 요소에 작성된 값을 얻어와 변수에 저장
        const n1 = Number(num1.value);
        const n2 = Number(num2.value);

        // 클릭된 버튼에 작성된 내용을 얻어옴
        // + - * / %
        const op = btn.innerText;

        // eval("코드 형식의 문자열")
        // 매개변수의 문자열을 JS 코드로 해석/수행하는 함수
        // 속도가 느림 + 보안 이슈
        // result.textContent = eval(n1 + op + n2);

        if(n2 == 0 && (op == "/" || op == "%")){
            empty();
            return alert("0으로는 나눌 수 없습니다.");
        }

        // 해별 방법 : new Function() 이용
        result.innerText = new Function("return " + n1 + op + n2)();
        empty();
    
    } else {
        alert("숫자를 모두 입력해주세요.");
    }
}

function empty(){
    num1.value = "";
    num2.value = "";
}