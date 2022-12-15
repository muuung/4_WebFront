function inputEnter(obj){
    
    // 키보드 입력 과정
    // 키누름 -> keydown -> input 태그에 입력 -> keypress -> (손을 떼면) keyup
    
    obj.style.height='1px';
    obj.style.height=(12 + obj.scrollHeight) + 'px';

    console.log(window.event.key); // 현재 눌려진 키 확인

    if(window.event.key == "Enter"){ // 눌러진 키가 Enter일 경우
        // 다른 함수 호출
        readValue();
    }
}

function readValue(){ // 입력된 값을 읽어들여 채팅창에 출력

    // 채팅과 관련된 요소 모두 얻어오기
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chattingInput");

    /* 
        요소.scrollTop : 요소 내부 현재 스크롤의 위치
        요소.scrollTop = 위치 : 스크롤을 트겅 위치로 이동
        요소.scrolHeight : 스크롤의 전체 높이
    */

   // 채팅이 정상적으로 입력된 경우에만 출력
   if(input.value.trim().length > 0) {
       
       // 채팅창에 입력된 값으로 채팅 추가
       bg.innerHTML += "<p><span>" + input.value + "</span></p>";

       bg.scrollTop = bg.scrollHeight;

    } else { // 입력 X인 경우
        alert("채팅 내용을 입력해주세요.");
    }
    
    // 입력한 내용 삭제
    input.value = "";
}