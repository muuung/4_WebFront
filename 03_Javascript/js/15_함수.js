// 페이지 로딩 시 바로 수행
(function(){
    const str = "점심 메뉴 추천해주세요.";
    console.log(str);
})();

// 변수명 중복X
(function(){
    const str = "전 오늘 밥버거 먹겠습니다.";
    console.log(str);
})();

// 화살표 함수(Arrow Function)
// 1. 기본 형태 ([매개변수]) => {}
document.getElementById("btn1").addEventListener("click", () => {
    alert("화살표 함수 기본 형태입니다.");
})

// 즉시 실행 함수 + 화살표 함수
(() => {
    console.log("즉시 실행 함수 + 화살표 함수");
})();

// 매개변수 1개 : 매개변수 => {}
document.getElementById("btn2").addEventListener("click", event => {
    // 매개변수 event : 이벤트 관련 정보를 모두 갖고 있는 객체
    console.log(event);

    // event.target : 이벤트가 발생한 대상(요소)
    console.log(e.target);

    event.target.style.backgroundColor = "yellow";

    // ★ 화살표 함수 주의 사항 ★
    // 화살표 함수를 이벤트 핸들러로 사용할 경우
    // this window 객체를 나타내게 됨
    // (화살표 함수 내부에서 this 사용 불가)
    // -> event.target으로 대체

    console.log(this);
})

// {}, return 생략 () => 값 또는 식
function print(fn){ // fn : 전달받은 함수
    console.log(fn(2));
    console.log(function(2){return num * 10});
}

document.getElementById("btn3").addEventListener("click", () => {
    // 익명 함수
    print(function(num){return num * 10});
    
    // 화살표 함수
    print(num => num * 100);
});