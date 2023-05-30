//scene1를 스크롤 하고 있다면  body에 id="show-scene-1"이 붙게한다.
//그 아이디를 이용하여 해당하는것만 보이게 한다

//(() => {console.log("즉시호출함수");})();  ==> 즉시호출함수 함수를 호출하지않아도 바로 호출됨  (()=>{})();

(() => {
  //각구간에 대한 정보를 담겠다, 4개의 구간이다 4개의 객체가 되겠다

  let yOffset =0;//window.pageYOffset 대신 사용할 변수;
  let prevScrollHeight =0; //현재 스크롤위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene =0;//현재 활성화(눈에 보고있는) scene(scroll-section)
  
  const sceneInfo = [
    {
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

  function setLayout() {
    //각 영역의 높이값 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
      console.log(sceneInfo);
    }
    
  }

  
  function scrollLoop(){
   //현재 scene
   prevScrollHeight =0; //초기화를 해야 값이 누적되지 않는다.//현재위치 이전의 scene들의 높이값
   for(let i=0; i<currentScene; i++){
    //prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
    prevScrollHeight += sceneInfo[i].scrollHeight;
   }
   console.log(prevScrollHeight)

   if(yOffset>prevScrollHeight+sceneInfo[currentScene].scrollHeight){
    currentScene++;
     // currentScene 값이 sceneInfo의 범위를 벗어나지 않도록 조정합니다.
     if (currentScene >= sceneInfo.length) {
      currentScene = sceneInfo.length - 1;
    }
   }

   if(yOffset<prevScrollHeight){
    currentScene--;
     // currentScene 값이 음수가 되지 않도록 조정합니다.
     if (currentScene < 0) {
      currentScene = 0;
    }
   }
   console.log(currentScene)
  }

  window.addEventListener('resize',setLayout)//화면의 사이즈가 바뀌면 setLayout를 다시 호출함
  window.addEventListener('scroll',()=>{
    yOffset=window.pageYOffset; // 조절이 필요하여 변수에 넣었음
     //console.log(yOffset)//현재 스크롤한 px값을 알수있다.
    scrollLoop();
  })
  setLayout();
})();
