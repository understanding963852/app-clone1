//배열안에 객체를 4개만든다. html에서 section을 4개 만들었기 때문이다

const sceneInfo = [{
    //0
    type: "sticky", //sticky기능이 있는것과 없는것을 구별하기위해
    heightNum: 5, //브라우저의 높이의 5배로 scrollHeight세팅
    scrollHeight: 0, //스크롤의 높이에 대한 정보//값을 정하지 않은 이유는 디바이스에 따라가기 위해서다
    objs: {
      //html의 객체정보를 모여놓는역할
      container: document.querySelector("#scroll-section-0"),
    },
  },
  {
    //1
    type: "normal",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-1"),
    },
  },
  {
    //2
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-2"),
    },
  },
  {
    //3
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-3"),
    },
   
  },
];