# main.js

//scene1를 스크롤 하고 있다면  body에 id="show-scene-1"이 붙게한다.
//그 아이디를 이용하여 해당하는것만 보이게 한다

//(() => {console.log("즉시호출함수");})();  ==> 즉시호출함수 함수를 호출하지않아도 바로 호출됨  (()=>{})();

(() => {
  //각구간에 대한 정보를 담겠다, 4개의 구간이다 4개의 객체가 되겠다

  let yOffset = 0; //window.pageYOffset 대신 사용할 변수;
  let prevScrollHeight = 0; //현재 스크롤위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; //현재 활성화(눈에 보고있는) scene(scroll-section)



  function setLayout() {
    //각 영역의 높이값 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
      console.log(sceneInfo);
    }

    yOffset = window.pageYOffset;

    //아래는 중간에서 새로고침하더라도 제대로 실행되게 하기위해
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show-scene-${currentScene}`);
    //end 아래는 중간에서 새로고침하더라도 제대로 실행되게 하기위해
  }

  function scrollLoop() {
    //현재 scene
    prevScrollHeight = 0; //초기화를 해야 값이 누적되지 않는다.//현재위치 이전의 scene들의 높이값
    for (let i = 0; i < currentScene; i++) {
      //prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    console.log(prevScrollHeight);

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
      // currentScene 값이 sceneInfo의 범위를 벗어나지 않도록 조정합니다.
      if (currentScene >= sceneInfo.length) {
        currentScene = sceneInfo.length - 1;
      }
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene == 0) return; //안적어도 됨
      currentScene--;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
      // currentScene 값이 음수가 되지 않도록 조정합니다.
      if (currentScene < 0) {
        currentScene = 0;
      }
    }
    console.log(currentScene);
    //document.body.setAttribute("id", `show-scene-${currentScene}`);

    playAnimation();
  }
  function calcValues(values,currentYOffset){
    //values는 각 값변화의 시작값과 끝값의 배열
    //currentYOffset - 현재 얼마나 스크롤되었는지
   // 각섹션마다의 안에서 얼마나 scroll이 되었는지를 계산
   
  }

  function playAnimation() {
    //문장들이 하나씩 나왔다가 사라지는것
    const objs=sceneInfo[currentScene].objs;
    const values=sceneInfo[currentScene].values;
    const currentYOffset=yOffset -  prevScrollHeight;//전체 스크롤값에서  현재씬 이전까지의 높이값을 뺀것이므로 현재씬안에서의 스크롤값을 나온다
  console.log(currentScene,currentYOffset)//현재씬, 각영역마다의 scroll값이 나온다.
    switch (currentScene) {
      case 0:
        //console.log("0번 플레이")
        let messageA_opacity_0=values.messageA_opacity[0];
        let messageA_opacity_1=values.messageA_opacity[1];
        //console.log(messageA_opacity_0)
        //console.log(calcValues(values.messageA_opacity,currentYOffset))
       
        break;
      case 1:
        //console.log("1번 플레이")
        break;
      case 2:
        //console.log("2번 플레이")
        break;
      case 3:
        //console.log("3번 플레이")
        break;

    }
  }

  window.addEventListener("resize", setLayout); //화면의 사이즈가 바뀌면 setLayout를 다시 호출함
  window.addEventListener("load", setLayout); //이미지등 모두가 로드되면 setLayout를 호출함
  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset; // 조절이 필요하여 변수에 넣었음
    //console.log(yOffset)//현재 스크롤한 px값을 알수있다.
    scrollLoop();
  });
  setLayout();
})();
