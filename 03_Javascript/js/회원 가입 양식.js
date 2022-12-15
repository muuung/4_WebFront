// 아이디 : 값이 변했을 때
document.getElementById("inputId").addEventListener("change", function(){

    const regEx = /^[a-z]{1,}[\w\d\-\_]{5,13}$/;

    if(this.value.trim().length == 0){
        this.style.backgroundColor = "white";
        this.value = "";
        return;
    }

    if(regEx.test(this.value)){
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";

    }else{
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
});


// 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage = document.getElementById("pwMessage");

inputPw.addEventListener("keyup", function(){
    
    // 1 : 비밀번호에 입력이 제대로 되었을 때
    if(inputPw.value.trim().length != 0){
        
        // 2 : 비밀번호 확인에 입력이 제대로 되었을 때
        if(inputPwConfirm.value.trim().length != 0){

            // 3 : 비밀번호 확인이 일치할 때
            if(inputPwConfirm.value == this.value){
                pwMessage.innerText = "비밀번호 일치";
                pwMessage.classList.add("confirm");
                pwMessage.classList.remove("error");
                
            // 3 : 비밀번호 확인이 일치하지 않을 때
            }else{
                pwMessage.innerText = "비밀번호 불일치";
                pwMessage.classList.add("error");
                pwMessage.classList.remove("confirm");
            }
        }

    // 1 : 비밀번호에 입력이 제대로 되지 않았을 때
    }else{
        this.value = "";
        pwMessage.innerText = "";
    }
})

inputPwConfirm.addEventListener("keyup", function(){
    if(inputPw.value.trim().length == 0){
        this.value = "";
        alert("비밀번호를 입력해주세요");
        inputPw.focus();
        return;
    }

    if(inputPw.value == this.value){
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");

    }else{
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
    }
});


// 이름 : 값이 변화했을 때
document.getElementById("inputName").addEventListener("change", function(){
    
    const nameMessage = document.getElementById("nameMessage");

    const regEx = /^[가-힣]{2,5}$/;

    if(this.value.trim().length == 0){
        nameMessage.innerText = "";
        nameMessage.classList.remove("confirm");
        nameMessage.classList.remove("error");

    }else{
        if(regEx.test(this.value)){
            nameMessage.innerText = "정상입력";
            nameMessage.classList.add("confirm");
            nameMessage.classList.remove("error");

        }else{
            nameMessage.innerText = "한글만 입력하세요";
            nameMessage.classList.add("error");
            nameMessage.classList.remove("confirm");
        }
    }
});


// 회원가입 버튼 클릭 시 : validate() 함수를 호출
function validate(){
    
    // 성별이 선택되지 않은 경우
    const gender = document.getElementsByName("gender");

    if(!(gender[0].checked || gender[1].checked)){
        alert("성별을 선택해주세요");
        return false;
    }
    
    // 전화번호 형식이 올바르지 않을 경우
    const inputTel = document.getElementById("inputTel");
    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regEx.test(inputTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다");
        return false;
    }

    return true;
}