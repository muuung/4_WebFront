var str = "JS 코드를 함수가 아닌 "
        + "JS 파일 또는 script 태그 내부에 바로 작성하면 "
        + "HTML 랜더링 시 바로 수행된다.";

console.log(str);

// 변수 선언 위치에 따른 구분
var num1 = 100; // 전역변수
num2 = 200;     // 전역변수

console.log("num1 : " + num1);
console.log("num2 : " + num2);

function test(){
    var num3 = 300; // function 지역변수
    num4 = 400;     // 전역변수

    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num4 : " + num4);

    if(num3 == 300){
        var num5 = 500;
        num6 = 600;
    }

    console.log("if문 종료 후 num5 : " + num5); // function 지역변수
    console.log("if문 종료 후 num6 : " + num6); // 전역변수
}

test(); // 함수 호출

// console.log("함수 외부 num3 : " + num3);
// num3 is not defined : 함수 종료 후에는 사용 불가

// script 언어는 중간에 에러가 발생하면 해석을 멈춤
console.log("함수 외부 num4 : " + num4); // 전역변수

// console.log("함수 종료 후 num5 : " + num5);
// num5 is not defined

console.log("함수 종료 후 num6 : " + num6); // 전역변수

// var 변수명 중복 확인
var num1 = 999;
console.log("var num1 중복 확인 : " + num1);

// 자료형 확인 (+ 변수 선언 방법)
function typeTest(){
    let temp1;
    // let temp1 = 200; 변수명 중복 X
    // 블록 범위 변수 'temp1'을(를) 다시 선언할 수 없습니다.

    if(temp1 == 100){
        // 블록 범위 확인
        let temp2 = 200;
        const temp3 = 300;
        temp3 = 400; // Assignment to constant variable
    }

    console.log(temp1);
    // console.log(temp2); error
    // console.log(temp3); error

    // --------------------------------------------------

    // 자료형 확인
    const typeBox = document.getElementById("typeBox");

    // typeBox 요소 내부의 내용을 빈 문자열로 바꿔라
    // == 내부 내용 삭제
    typeBox.innerHTML = "";

    // const name2; 상수는 선언과 동시에 초기화가 필수!

    let name; // undefined
    typeBox.innerHTML += "name : " + name + " / " + typeof name + "<br><br>";

    name = "홍길동"; // string

    // typeOf 변수명 : 해당 변수의 자료형을 반환하는 연산자
    typeBox.innerHTML += "name : " + name + " / " + typeof name + "<br><br>";

    // number
    const age = 20;
    const height = 178.9;

    typeBox.innerHTML += "age : " + age + " / " + typeof age + "<br><br>";
    typeBox.innerHTML += "height : " + height + " / " + typeof height + "<br><br>";

    // boolean
    const isTrue = true;
    typeBox.innerHTML += "isTrue : " + isTrue + " / " + typeof isTrue + "<br><br>";

    // object(배열, JS객체)

    // 배열 선언과 동시에 초기화
    
    // Java
    // int[] arr = {10, 20, 30, 40, 50};

    // JS([]사용)
    const arr = [10, 20, 30, 40, 50];
    typeBox.innerHTML += "arr : " + arr + " / " + typeof arr + "<br><br>";

    for(let i = 0; i < arr.length; i++) {
        typeBox.innerHTML += "arr : [" + i + "] : " + arr[i] + "<br><br>";
    }

    // JS 객체
    // - K:V 쌍으로 이루어짐(Map 형식)
    // - key는 무조건 String
    // - 리터럴 표기법 : {}

    // const user = {"K:V, "K":V};
    const user = {"id":"user01", "pw":"pass01", "num":123, "a":arr};
    
    typeBox.innerHTML += "user : " + user + " / " + typeof user + "<br><br>";
    console.log(user);

    // 객체에 저장된 값 출력
    typeBox.innerHTML += "user.id : " + user.id + "<br><br>";
    typeBox.innerHTML += "user.pw : " + user.pw + "<br><br>";
    typeBox.innerHTML += "user.num : " + user.num + "<br><br>";
    typeBox.innerHTML += "user.a : " + user.a + "<br><br>";
    typeBox.innerHTML += "user.ap[2] : " + user.a[2] + "<br><br>";

    // function
    // 1. 변수명 == 함수명
    const fnSum = function(n1, n2){ // 익명 함수
        return n1 + n2;
    }

    // 함수명만 작성하는 경우 -> 함수에 작성된 코드 자체가 반환
    typeBox.innerHTML += "fnSum : " + fnSum + " / " + typeof fnSum + "<br><br>";

    // 함수명(매개변수) == 함수 호출(함수 코드 수행)
    typeBox.innerHTML += "fnSum(1,2) : " + fnSum(1,2) + "<br><br>";

    // 2. 함수를 매개변수로 전달하는 형태
    function plusFn(num, fn){
        // num : number
        // fn : function

        return num + fn();
    }

    const result = plusFn(100, function(){return 30 - 10;})
    typeBox.innerHTML += "result : " + result;
}