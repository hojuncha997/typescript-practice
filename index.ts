
// Union Type (타입을 2개 이상 합친 새로운 타입 만들기. 가변적 타입)
let 회원 :number | string ="kim";

//  넘버 또는 스트링만 들어올 수 있는 배열 회원들2 :number|string[] 과는 다르다.
 let 회원들2 :(number | string)[] = [1, "2", 3]

 let 오브젝트 :{a:string|number} = {a:"123"}
 오브젝트 = {a:123}



//  any: 모든 자료형을 허용해준다. 타입스크립트를 쓰는 의미가 없어진다. 그냥 JS 변수와 똑같아진다. 타입버그가 발생해도 잡아주지 않는다.
let 이름2 :any;
이름2 = 123;
이름2 = true;
이름2 = [];


// unknown: 모든 자료형을 허용해준다. any와 유사하다. 그러나 unknown 타입을 다른 곳에 집어넣으려고 하면
// 그쪽 실드가 발동해서 에러가 발생한다. any는 어디든 들어갈 수 있다. 따라서 any보다는 안전하다고 할 수 있다.
// number 타입처럼 연산도 할 수 없다. any는 연산도 가능하다. TS는 수학연산도 타입이 맞아야 한다.


let 이름3 :unknown;
이름3 = 123;
이름3 ={};



// TS의 엄격함
let 나이2 :string|number;
// string타입에는 연산을 할 수 없으므로 연산이 안 된다. 에러 발생
// 나이2 + 1 ; 


let 나이3 :unknown = 1;
// 나이 - 1; number타입이 아니므로 에러가 발생한다.
// number타입만 수학 연산이 가능하다

// 숙제1
let user :string = "kim";
let age :number | undefined = undefined;
let married :boolean = false;
let 철수 :(string|number|undefined|boolean)[] = [user, age, married];

// 숙제2
let 학교 :{
   score :(number|boolean)[], 
   teacher :string, 
   friend :string|string[]
} = {
   score : [100, 97, 84],
   teacher : "Phil",
   friend : "John"
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]