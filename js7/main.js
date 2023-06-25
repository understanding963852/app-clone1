(function(){
  let yOffset=0;
  let prevScrollHeight=0;
  let currentScene=0;
  let enterNewScene=false;

  
  function setLayout() {
    //각 영역의 높이값 세팅
    for(let i=0; i<sceneInfo.length;i++){
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height=`${sceneInfo[i].scrollHeight}px`
    }


    yOffset=window.pageYOffset;
    console.log("여기",yOffset)
    let totalScrollHeight=0;
    for(let i=0;i<sceneInfo.length;i++){
      totalScrollHeight +=sceneInfo[i].scrollHeight;
      if(totalScrollHeight>=yOffset){
        currentScene=i;
        break;
      }
      document.body.setAttribute('id',`show-scene-${currentScene}`)
    }
  }//setLayout

  function calcValues(values,currentYOffset){
    let rv;
    //section안에서 얼마나 스크롤 되었는지를 비율로 나타낸다
    let scrollRatio= currentYOffset/sceneInfo[currentScene].scrollHeight;
    let scrollHeight=sceneInfo[currentScene].scrollHeight;
    //console.log(scrollRatio)


    if(values.length===3){
      let partScrollStart=values[2].start*scrollHeight;
      let partScrollEnd=values[2].end*scrollHeight;

      let partScrollHeight=partScrollEnd - partScrollStart;

      if(currentYOffset>=partScrollStart && currentYOffset<=partScrollEnd){
        rv=(currentYOffset - partScrollStart)/partScrollHeight*(values[1]-values[0])+values[0];
      }else if(currentYOffset<partScrollStart ){
        rv=values[0]
      }else if(currentYOffset>partScrollEnd){
        rv=values[1]
      }

      console.log(partScrollHeight);
    }else{
      rv = scrollRatio * (values[1]-values[0])+values[0];//0~1사의 값을 받을수 있다
    }
   
    return rv;
  }




  function playAnimation(){
    let objs=sceneInfo[currentScene].objs;
    let values=sceneInfo[currentScene].values;

    let currentYOffset=yOffset - prevScrollHeight;
    console.log(currentScene, currentYOffset)
    let srollHeight=sceneInfo[currentScene].scrollHeight;
    let scrollRation=currentYOffset/srollHeight;
    

    switch (currentScene){
      case 0:
        console.log('0 play')
        if (scrollRation <= 0.22) {
          // in
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_in,currentYOffset);
        } else {
          // out
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_out,currentYOffset);
        }

       
        break;
      case 1:
      console.log('1 play')
      break;
      case 2:
      console.log('2 play')
      break;
      case 3:
      console.log('3 play')
      break;
    }
  }


  function scrollLoop(){
    enterNewScene=false;
    prevScrollHeight=0;
    for(let i=0; i<currentScene;i++){
      prevScrollHeight+=sceneInfo[i].scrollHeight;
    }
    if(yOffset>prevScrollHeight+sceneInfo[currentScene].scrollHeight){
      enterNewScene=true;
      currentScene++;
    }
    if(yOffset<prevScrollHeight){
      enterNewScene=true;
      currentScene--;
    }
    //console.log(currentScene)
    document.body.setAttribute('id',`show-scene-${currentScene}`)


    if(enterNewScene)return;

    playAnimation();
  }
  //console.log(sceneInfo)




  window.addEventListener('resize',setLayout)//화면에 사이즈가 변할때 다시 실행되도록한다
  window.addEventListener('scroll',()=>{
    yOffset=window.pageYOffset;
    //console.log(yOffset)
    scrollLoop();
  })
  window.addEventListener('resize',setLayout)
  window.addEventListener('load',setLayout)

})();
