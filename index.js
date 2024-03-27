var 이름 = "kim";
var 나이 = 50;
var 결혼여부 = true;
// 문자만 담길 수 있다.
var 회원들 = ['kim', 'park'];
// 이 변수엔 object만 들어올 수 있음. member1과 member2에는 오직 string 값만 올 수 있음.
var 오브젝트자료형 = { member1: "kim", member2: 'park' };
// 그런데 위처럼 모든 곳에 타입지정을 직접작성 하지 않아도 대부분 자동으로 추론해서 :타입쉴드가 지정된다.
// 실습
// q1. 
var myName = "이름";
var myAge = 99;
// q2
var artist = { title: "노래제목", artistName: "가수이름" };
// q3
var obectType1 = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
