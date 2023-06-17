
# css에서 모든 .sticky-elem을 fixed 처리했기때문에  
# 해당하는 영역에 진입하면 그 영역의 sticky-elem만 나오도록 한다
# (function(){})()//즉시실행함수  --> 이렇게 사용하는 이유는 전역변수를 사용하는것을 피하기 위해서이다.

![image](https://github.com/understanding963852/app-clone1/assets/60366769/b27dc037-3341-4628-bfda-38d503e03bfb)


# 각영역의 높이값이 설정된다 ---   js1 폴더 참조  🌳🌳🌳
//////////////////////////////////////////////////////////////////////////


#  몇번째 씬이 스크롤되고 있는지 판별해야한다
#  스크롤이 일어날때마다 함수 scrollLoop()를 실행한다
![image](https://github.com/understanding963852/app-clone1/assets/60366769/71891dd4-51e6-4e81-80d9-18d249b118bc)

# pageYOffset 값 확인하기 
![image](https://github.com/understanding963852/app-clone1/assets/60366769/3bfd5507-88fa-4bd2-8fe2-5890ca0de346)


# 설정이 필요해서 window.pageYOffset; 를 별도로 변수로 빼주었다.

![image](https://github.com/understanding963852/app-clone1/assets/60366769/defb3348-4316-43be-814c-3483d5b0ca3c)

# 예를 들어 현재 index번호가 2번인 3번째 section이 화면에 보이고 있다.
# 그럼 세번째 section에 스크롤 하고 있다는것을 어떻게 인식할것인가
# ➡️  yOffset값이 0번과 1번의 높이값을 합한 값보다 크다면 2번의 영역에 스크롤되고 있는것이

![image](https://github.com/understanding963852/app-clone1/assets/60366769/c6bea89c-f84d-4afb-886f-8b076b98c6b0)

# 위의 이미지에서 0번과 1번의 합을 저장할 변수를 만든다.  
# 변수를 먼저만든다 (현재 스크롤 위치(yOffSet)보다 이전에 위치한 스크롤 섹션들의 높이값의 합을 가지고 있을 변수) --  prevScrollHeight
# 현재 화면에 스크롤되고있는 현재 섹션을 담을 변수가 필요하다 -- currentScene
![image](https://github.com/understanding963852/app-clone1/assets/60366769/df6d297a-f2bd-4d56-b600-fb7bfd1cbe26)

![image](https://github.com/understanding963852/app-clone1/assets/60366769/ed184399-9869-464c-b9ef-3186d406c965)
# 위의 이미지를 코드를 바꾸면 아래와 같이 된다   
![image](https://github.com/understanding963852/app-clone1/assets/60366769/eaf77881-3279-4a67-aa13-f4553f60d0b9)

# 여기까지 js2 폴더 참조  🌳🌳🌳
