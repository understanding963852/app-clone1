(() => {
  let yOffset = 0; // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
  let enterNewScene = false; // 새로운 scene이 시작된 순간 true


  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === "sticky") {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if(sceneInfo[i].type === "normal") {
        sceneInfo[i].scrollHeight =
          sceneInfo[i].objs.container.offsetHeight;
      }
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show-scene-${currentScene}`);

  }

  function calcValues(values,currentYOffset){
    let rv;
    //section안에서 얼마나 스크롤 되었는지를 비율로 나타낸다
    const scrollHeight=sceneInfo[currentScene].scrollHeight;
    const scrollRatio= currentYOffset/scrollHeight;
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
        if (scrollRation <= 0.22) {
          // in
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset
          );
          objs.messageA.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRation <= 0.42) {
          // in
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset
          );
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset
          );
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRation <= 0.62) {
          // in
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_in,
            currentYOffset
          );
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_out,
            currentYOffset
          );
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRation <= 0.82) {
          // in
          objs.messageD.style.opacity = calcValues(
            values.messageD_opacity_in,
            currentYOffset
          );
          objs.messageD.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageD.style.opacity = calcValues(
            values.messageD_opacity_out,
            currentYOffset
          );
          objs.messageD.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_out,
            currentYOffset
          )}%, 0)`;
        }
        break;
      case 1:
        console.log('1 play');
        break;
      case 2:
        console.log('2 play');
        if (scrollRation <= 0.25) {
          // in
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset
          );
          objs.messageA.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRation <= 0.57) {
          // in
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            currentYOffset
          )}%, 0)`;
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset
          );
          objs.pinB.style.transform = `scaleY(${calcValues(
            values.pinB_scaleY,
            currentYOffset
          )})`;
        } else {
          // out
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_out,
            currentYOffset
          )}%, 0)`;
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset
          );
          objs.pinB.style.transform = `scaleY(${calcValues(
            values.pinB_scaleY,
            currentYOffset
          )})`;
        }

        if (scrollRation <= 0.83) {
          // in
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            currentYOffset
          )}%, 0)`;
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_in,
            currentYOffset
          );
          objs.pinC.style.transform = `scaleY(${calcValues(
            values.pinC_scaleY,
            currentYOffset
          )})`;
        } else {
          // out
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_out,
            currentYOffset
          )}%, 0)`;
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_out,
            currentYOffset
          );
          objs.pinC.style.transform = `scaleY(${calcValues(
            values.pinC_scaleY,
            currentYOffset
          )})`;
        }
        break;
      case 3:
        console.log('3 play');
        break;
    }
  }

  // function scrollLoop() {
  //   enterNewScene = false;
  //   prevScrollHeight = 0;

  //   for (let i = 0; i < currentScene; i++) {
  //     prevScrollHeight += sceneInfo[i].scrollHeight;
  //   }

  //   if (
  //     yOffset <
  //     prevScrollHeight + sceneInfo[currentScene].scrollHeight
  //   ) {
  //     document.body.classList.remove("scroll-effect-end");
  //   }

  //   if (
  //     yOffset >
  //     prevScrollHeight + sceneInfo[currentScene].scrollHeight
  //   ) {
  //     enterNewScene = true;
  //     if (currentScene === sceneInfo.length - 1) {
  //       document.body.classList.add("scroll-effect-end");
  //     }
  //     if (currentScene < sceneInfo.length - 1) {
  //       currentScene++;
  //     }
  //     document.body.setAttribute("id", `show-scene-${currentScene}`);
  //   }

  //   if (yOffset < prevScrollHeight) {
  //     enterNewScene = true;
  //     // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
  //     if (currentScene === 0) return;
  //     currentScene--;
  //     document.body.setAttribute("id", `show-scene-${currentScene}`);
  //   }

  //   if (enterNewScene) return;

  //   playAnimation();
  // }
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



  window.addEventListener("load", () => {
    setLayout(); // 중간에 새로고침 시, 콘텐츠 양에 따라 높이 계산에 오차가 발생하는 경우를 방지하기 위해 before-load 클래스 제거 전에도 확실하게 높이를 세팅하도록 한번 더 실행
   
    })

    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    
    });



})();
