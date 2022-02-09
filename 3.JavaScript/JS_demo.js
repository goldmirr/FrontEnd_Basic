//중복코드 (유지 보수 단점)
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")

//함수 기본 형태 (유지보수 강점)
function printmessage(){
    console.log("hello")
}

printmessage()
printmessage()
printmessage()
printmessage()
printmessage()
printmessage()

// 사용 형태 1 매개변수, return값 둘다 있는 경우
// function add(number1, number2){
//     return number1 + number2
// }

// console.log(add(2,5.3))


//사용 형태 2 매개변수만 있는 경우

// function add(){
//     // 변수 선언
//     var Number1 = parseInt(document.getElementById("First").value)
//     var Number2 = parseInt(document.getElementById("Second").value)
//     // 변수 재활용이 가능하다.
//     document.getElementById("resultBox").innerHTML = Number1 + Number2 
// }



function minus(){
    document.getElementById("resultBox").innerHTML = parseInt(document.getElementById("First").value) - parseInt(document.getElementById("Second").value)
}

function multiply(){
    document.getElementById("resultBox").innerHTML = parseInt(document.getElementById("First").value) * parseInt(document.getElementById("Second").value)
}

function divide(){
    document.getElementById("resultBox").innerHTML = parseInt(document.getElementById("First").value) / parseInt(document.getElementById("Second").value)
}

//---------------이벤트 함수 사용하기------------------

var A = "kyung"

//조건문
function add(){
    // 변수 선언
    var Number1 = parseInt(document.getElementById("First").value)
    var Number2 = parseInt(document.getElementById("Second").value)
    // 변수 재활용이 가능하다.
    var resultvalue = document.getElementById("resultBox").innerHTML = Number1 + Number2 
    var resultValue = parseInt(Number1) + parseInt(Number2)
    if(resultvalue>10){
        console.log("10보다 크다")
    }
    else if(resultvalue<10){
        console.log("10보다 작다")
    }

    else{
        console.log("10이다")
    }

    if(resultvalue % 2 == 1){
        console.log("홀")
    }
    
    if(resultvalue % 2 == 0){
        console.log("짝")
    }

}

