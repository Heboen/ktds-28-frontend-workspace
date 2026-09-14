// function과 this와의 관계에 대해 설명.
// function을 클래스 처럼 사용할 때의 this (최근들어 잘 사용되지 않음)
function Certificate(date, name, org){ //함수이자 생성자이자 클래스처럼 사용
    this.date = date;
    this.name = name;
    this.org = org;
    // 멤버 변수처럼 사용 / Function이 만들어준 객체
}

// function 자체의 this
function callFunction(){
    console.log(this); // 이 Function을 호출한 대상
    console.dir(this);
    console.log(arguments); 
}