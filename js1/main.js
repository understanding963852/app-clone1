//css에서 모든 .sticky-elem을 fixed 처리했기때문에  
//해당하는 영역에 진입하면 그 영역의 sticky-elem만 나오도록 한다
//(function(){})()//즉시실행함수  --> 이렇게 사용하는 이유는 전역변수를 사용하는것을 피하기 위해서이다.

(()=>{

    
  function setLayout() {
    //각 영역의 높이값 세팅
    for(let i=0; i<sceneInfo.length;i++){
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height=`${sceneInfo[i].scrollHeight}px`
    }
  }
  console.log(sceneInfo)
  window.addEventListener('resize',setLayout)//화면에 사이즈가 변할때 다시 실행되도록한다
  setLayout();

})()
