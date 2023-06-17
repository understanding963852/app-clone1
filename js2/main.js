//css에서 모든 .sticky-elem을 fixed 처리했기때문에  
//해당하는 영역에 진입하면 그 영역의 sticky-elem만 나오도록 한다
//(function(){})()//즉시실행함수  --> 이렇게 사용하는 이유는 전역변수를 사용하는것을 피하기 위해서이다.

(()=>{

    
  let yOffset=0//window.pageYOffset 대신 사용할 변수
  let prevScrollHeight=0;//현재 스크롤 위치(yOffSet)보다 이전에 위치한 스크롤 섹션들의 높이값의 합
  let currentScene=0;//현재 활성화된(눈앞에 보고있는) section



  function setLayout() {
    //각 영역의 높이값 세팅
    for(let i=0; i<sceneInfo.length;i++){
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height=`${sceneInfo[i].scrollHeight}px`
    }
  }

  //console.log(sceneInfo)
  function scrollLoop(){
    //여기서 현재 몇전째 section에 스크롤중인지를 판별하려 한다
    prevScrollHeight=0; //값이 누적되지 않도록 최기화 시킨다  
    for(let i=0; i<currentScene; i++){
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    // 현재 section의 index번호 추출
    if(yOffset>prevScrollHeight + sceneInfo[currentScene].scrollHeight){
      currentScene++;
    }

    if(yOffset<prevScrollHeight){
      currentScene--;
    }

    console.log(currentScene)
   
  }
  window.addEventListener('resize',setLayout)//화면에 사이즈가 변할때 다시 실행되도록한다
  //몇번째 씬이 스크롤되고 있는지 판별해야한다
  window.addEventListener('scroll',()=>{
    //다른할일이 있으민 줄이지 말것
    yOffset=window.pageYOffset;
    console.log(yOffset)
    scrollLoop();
  })
  setLayout();

})()

