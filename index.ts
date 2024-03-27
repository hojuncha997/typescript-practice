let 이름 :string ="kim";
let 나이 :number = 50;
let 결혼여부 :boolean = true;

// 문자만 담길 수 있다.
let 회원들 :string[]   = ['kim', 'park']

// 이 변수엔 object만 들어올 수 있음. member1과 member2에는 오직 string 값만 올 수 있음.
let 오브젝트자료형 :{member1 : string, member2 : string} = {member1: "kim" , member2: 'park'}

// 그런데 위처럼 모든 곳에 타입지정을 직접작성 하지 않아도 대부분 자동으로 추론해서 :타입쉴드가 지정된다.


// 실습

// q1. 
let myName :string = "이름";
let myAge :number = 99;

// q2
let artist :{title :String, artistName: string} = {title :"노래제목", artistName: "가수이름"}

// q3
let obectType1 :{member :string[], days :number, started :boolean}
 = {
    member: ["kim", "park"],
    days: 30,
    started: true,
 }