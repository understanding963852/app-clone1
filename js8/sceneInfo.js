//배열안에 객체를 4개만든다. html에서 section을 4개 만들었기 때문이다

const sceneInfo = [{
    //0
    type: "sticky", //sticky기능이 있는것과 없는것을 구별하기위해
    heightNum: 5, //브라우저의 높이의 5배로 scrollHeight세팅
    scrollHeight: 0, //스크롤의 높이에 대한 정보//값을 정하지 않은 이유는 디바이스에 따라가기 위해서다
    objs: {
      //html의 객체정보를 모여놓는역할
      container: document.querySelector("#scroll-section-0"),
      messageA: document.querySelector("#scroll-section-0 .main-message.a"),
      messageB: document.querySelector("#scroll-section-0 .main-message.b"),
      messageC: document.querySelector("#scroll-section-0 .main-message.c"),
      messageD: document.querySelector("#scroll-section-0 .main-message.d")
    },
    values: {
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
    }
  },
  {
    //1
    type: "normal",
    //heightNum: 5,//normal에서는 필요하지 않음
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
      messageA: document.querySelector("#scroll-section-2 .a"),
      messageB: document.querySelector("#scroll-section-2 .b"),
      messageC: document.querySelector("#scroll-section-2 .c"),
      pinB: document.querySelector("#scroll-section-2 .b .pin"),
      pinC: document.querySelector("#scroll-section-2 .c .pin"),
    },
    values: {
      messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
      messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
      messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
      messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
      messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
      messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
      messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
      messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
      messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
      messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
      messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
      pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
      pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
      pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
      pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
      pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
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