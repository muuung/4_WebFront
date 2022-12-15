const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");

function sum(){
    cal(Number(input1.value) + Number(input2.value), "+");
}

function min(){
    cal(Number(input1.value) - Number(input2.value), "-");
}

function mul(){
    cal(Number(input1.value) * Number(input2.value), "*");
}

function div(){
    cal(Number(input1.value) / Number(input2.value), "/");
}

function res(){
    cal(Number(input1.value) % Number(input2.value), "%");
}

function cal(cal, sig){

    // 숫자가 모두 입력되지 않았을 때
    if(input1.value != "" && input2.value != ""){
        
        // 기호가 나누기 또는 나머지이고 두 번째 숫자가 0일 때
        if(Number(input2.value) == 0 && (sig == "/" || sig == "%")){
            empty();
            return alert("0으로는 나눌 수 없습니다.");
        }

        // 계산 결과 출력
        result.innerText = cal;
        empty();

    } else {
        alert("숫자를 모두 입력해주세요.");
    }
}

function empty(){
    input1.value = "";
    input2.value = "";
}