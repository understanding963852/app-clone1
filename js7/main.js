//css에서 모든 .sticky-elem을 fixed 처리했기때문에  
//해당하는 영역에 진입하면 그 영역의 sticky-elem만 나오도록 한다
//(function(){})()//즉시실행함수  --> 이렇게 사용하는 이유는 전역변수를 사용하는것을 피하기 위해서이다.

(()=>{

    
  let yOffset=0//window.pageYOffset 대신 사용할 변수
  let prevScrollHeight=0;//현재 스크롤 위치(yOffSet)보다 이전에 위치한 스크롤 섹션들의 높이값의 합
  let currentScene=0;//현재 활성화된(눈앞에 보고있는) section
  let enterNewScene=false;//새로운 씬이 시작되는 순간 true가 된다.


  function setLayout() {
    //각 영역의 높이값 세팅
    for(let i=0; i<sceneInfo.length;i++){
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height=`${sceneInfo[i].scrollHeight}px`
    }


    yOffset=window.pageYOffset;//다시 셋팅해야한다. 스크롤을 움직여야 값이 들어가게 아래에 만들어져있기때문에 여기에서 필요한 값을 다시 셋팅한다
    let totalScrollHeight=0;
    for(let i=0; i<sceneInfo.length;i++){
      totalScrollHeight +=sceneInfo[i].scrollHeight;
      if(totalScrollHeight>=yOffset){
        currentScene=i;
        break;
      }
    }
    document.body.setAttribute('id',`show-scene-${currentScene}`)//body에 클래스명 붙이기

  }

  function calcValues(values,currentYOffset){
    let rv;
    //section안에서 얼마나 스크롤 되었는지를 비율로 나타낸다
    const scrollHeight=sceneInfo[currentScene].scrollHeight;
    let scrollRatio= currentYOffset/scrollHeight;
    //console.log(scrollRatio)

    if(values.length === 3){
      //vlaues의 값이 3개인지를 확인하여 3개이면 
      //start~end사이에 애니메이션 실행
      //시작점구하기
      const partScrollStart=values[2].start*scrollHeight;
      const partScrollEnd=values[2].end * scrollHeight;
        //애니매이션이 시작되는곳과 끝나는곳의 거리를 계산해 낼수 있다 
        
      const partScrollHeight=partScrollEnd - partScrollStart;
        //console.log('vlaues[1]',values[1])

        if(currentYOffset>=partScrollStart && currentYOffset <= partScrollEnd){//범위안에 들어왔다면   
          rv = (currentYOffset - partScrollStart)/partScrollHeight * (values[1]  - values[0]) + values[0];
    
        }else if(currentYOffset<partScrollStart){//애니메이션이 발생하는 영역에 진입하기 전  
          rv=values[0];
        }else if(currentYOffset>partScrollEnd){//애니메이션이 발생하는 영역에서 벗어나면 
          rv=values[1];
        }

    }else{
      rv = scrollRatio * (values[1]-values[0])+values[0];//0~1사이의 값을 받을수 있다

    }

  
    return rv;

  }

  function playAnimation(){
    const objs=sceneInfo[currentScene].objs;
    const values=sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight ;//전체 스크롤값에서  현재씬 이전까지의 높이값을 뺀것이므로 현재씬안에서의 스크롤값을 나타낸다
    //console.log(currentScene,currentYOffset)
    const scrollHeight=sceneInfo[currentScene].scrollHeight;
    const scrollRation=currentYOffset / scrollHeight; //현재씬안에서의 scroll값의 비율값 
    switch (currentScene){
      case 0:
        //console.log('0 play');
        console.log(scrollRation)
        if (scrollRation <= 0.1) {
          // in
           objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
        } else if (scrollRation > 0.1 && scrollRation <= 0.22) {
          // stay
          objs.messageA.style.opacity = 1;
        } else if (scrollRation > 0.22 && scrollRation <= 0.3) {
          // out
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
        } else {
          objs.messageA.style.opacity = 0;
        }
       
       // console.log(messageA_opacity_in)

      
        break;
      case 1:
        console.log('1 play');
        break;
      case 2:
        console.log('2 play');
        break;
      case 3:
        console.log('3 play');
        break;
    }
  }

  //console.log(sceneInfo)
  function scrollLoop(){
    enterNewScene=false;
    //여기서 현재 몇전째 section에 스크롤중인지를 판별하려 한다
    prevScrollHeight=0; //값이 누적되지 않도록 최기화 시킨다  
    for(let i=0; i<currentScene; i++){
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    // 현재 section의 index번호 추출
    if(yOffset>prevScrollHeight + sceneInfo[currentScene].scrollHeight){
      enterNewScene=true;
      currentScene++;
         // console.log(currentScene)
    document.body.setAttribute('id',`show-scene-${currentScene}`)//body에 클래스명 붙이기
    }

    if(yOffset<prevScrollHeight){
      enterNewScene=true;
      if(currentScene==0)return;//화면이 바운스될때 값이 빠지는것을 막기위해서 작성(안해도됨)
      currentScene--;
         // console.log(currentScene)
    document.body.setAttribute('id',`show-scene-${currentScene}`)//body에 클래스명 붙이기
    }


   
    //애니메이션하는 함수는 빠로 빼겠다.
    if(enterNewScene) return;
    playAnimation();
  }
 
  window.addEventListener('scroll',()=>{
    //다른할일이 있으민 줄이지 말것
    yOffset=window.pageYOffset;
    //console.log(yOffset)
    scrollLoop();
  })
  window.addEventListener('resize',setLayout)//화면에 사이즈가 변할때 다시 실행되도록한다
  //몇번째 씬이 스크롤되고 있는지 판별해야한다
  window.addEventListener('load',setLayout)

})()

