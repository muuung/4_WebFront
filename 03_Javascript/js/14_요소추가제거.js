// 추가 버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function(){
    // div 요소 생성
    const div = document.createElement("div");

    // div에 class 추가
    div.classList.add("row");

    // input 요소 생성
    const input = document.createElement("input");

    // input in class 추가
    input.classList.add("in");

    // 요소에 속성을 추가하거나 변경할 때 사용하는 함수
    // 요소.setAttribute("속성명", "속성값")
    // 요소.removeAttribute("속성명") -> 속성 제거

    // input에 type="number" 추가
    input.setAttribute("type", "number");

    // span 요소 생성
    const span = document.createElement("span");

    // span에 remove class 추가
    span.classList.add("remove");
    
    // span에 &times; 추가
    span.innerHTML = "&times;";

    // span에 click 이벤트 동작 추가(동적 요소에 이벤트 추가)
    span.addEventListener("click", function(){

        // alert("동적 요소에 이벤트가 추가됨");
        this.parentElement.remove();
    })

    // div > input, sapn 조립
    div.append(input, span);

    // .container에 div를 마지막 자식으로 추가
    document.querySelector(".container").append(div);

    input.focus();
});

document.getElementById("calc").addEventListener("click", function(){
    const inArr = document.getElementsByClassName("in");
    let sum = 0;

    for(let item of inArr){
        sum += Number(item.value);
    }

    alert("합게 : " + sum);
});