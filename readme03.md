# 글자를 애니메이션을 주자  
# 문장 4개를 sceneInfo에 준비한다   
![image](https://github.com/understanding963852/app-clone1/assets/60366769/4751f57e-5e2b-44a4-a105-a85627d4a15f)
# 글자문장이 어느시점에 나타나고 사라지게 할것인지를 계산해 주어야한다.  
# 글자문장의 애니메이션을 별도의 함수로 만들겠다.(너무 길기 때문이기도 하다)
![image](https://github.com/understanding963852/app-clone1/assets/60366769/36087dbc-3d2e-4bcc-86a3-bb3d6637e96c)

# 화면에 나타난 section의 영역의 애니메이션만 일어나면 된다.  현재 보이는 영역을 인식하게 만들어 주어야한다.   
#  ⬇️ 해당영역이 잘 잡히는지 확인하기 
![image](https://github.com/understanding963852/app-clone1/assets/60366769/b1383241-43e4-42b3-bfc2-9d817ef32ee7)


# 활성화된 section내에서 얼마나 스크롤 되었는지를 비율로 나타내기 -->  calcValues 함수에서 계산한다.  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/e751d8b3-47c0-426e-9498-6061746e146b)

![image](https://github.com/understanding963852/app-clone1/assets/60366769/ce70dd16-10cd-4599-882a-3a7c535a696d)
# console창에 찍어보면 새로운 영역으로 넘어가면 1부터 다시 시작되는 것이다.  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/cea2a2ff-ba01-4edb-aaf0-8039486bcc9f)


# 활성화된 section에서 얼마나 스크롤 되었는지를 비율로 나타내기  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/943a5304-85a6-46dd-b0e0-c28148d23514)

![image](https://github.com/understanding963852/app-clone1/assets/60366769/e210506a-5ca4-4f91-9dac-734085f332ff)

# 비율에 해당하는 값 찾기 

![image](https://github.com/understanding963852/app-clone1/assets/60366769/bf4c17d5-d87a-41a2-a136-a247bd39b54b)

![image](https://github.com/understanding963852/app-clone1/assets/60366769/433de034-be9d-4d40-874d-2035a8e812b5)

![image](https://github.com/understanding963852/app-clone1/assets/60366769/4eaefde7-a904-41d6-a77c-aed8c17afabe)
![image](https://github.com/understanding963852/app-clone1/assets/60366769/3e0a53d3-1d62-4a6c-91b3-c85633fefcf5)

///////////////여기까지 js4 참조하기





# 아래와 같이 중간에 잘못된 값이 나올때가 있다. 
![image](https://github.com/understanding963852/app-clone1/assets/60366769/bfe3a448-991c-438e-9c96-fcc35639e54d)

# 🥩 해결방법은    --> 씬을 바꿀때 처리해 준다..

# 변수를 만들어서 그 변수가 true가 되는순간은 씬이 바뀌는 순간이다라고 인식하게 만든다  
# 새로운 씬이 시작되는 순간 true가 된다
![image](https://github.com/understanding963852/app-clone1/assets/60366769/fb1114b7-4931-4e32-bcab-f15f9b2122b9)

# 1️⃣ 스크롤을 움직일때마다 기본적으로 false가 지정되고 2️⃣ 는 씬이 바뀌는 순간이고 값이 바뀌는 순간 true가 되게한다.  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/d695b03c-15cb-4b4d-93a3-74b61e3ce6b8)

# enterNewScence이 true일때 잠깐동안은 scrollLoop함수를 종료한다.
# playAnimation(); 보다 위에 적어서   enterNewScence이 true일때 playAnimation();이 실행되지 않게 한다.
![image](https://github.com/understanding963852/app-clone1/assets/60366769/06bb935e-fe32-47b4-95e4-58416c1d22fd)

# ➡️ 씬이 바뀔때 마이너스 값이 나오는것을 처리할수 있다      


# 영상제목 : 특정 타이밍 스크롤 애니메이션 기능 추가  
# start와 end가 글자가 나타나고 사라지는 지점을 적은것이다.  
# 한영역의 전체 스크롤이 1이라고 계산한다
# messageA_opacity_in 가 나올시점이 start에 사라지는 시점은 end에 적는 것이다. 나머지 text들도 그런식으로 적어준다  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/0daa7227-e4af-4887-aa6b-c919773364e0)

# 아래의 calcValues함수가 한 섹션에서의 전체 스크롤값을 계산하는 곳이다.  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/146066a3-5641-4474-9782-9b4bf5bb6ece)

# 활성화된 section안에서 영역을 나누어서 글자문장들이 나타나고 사라져야한다. 
![image](https://github.com/understanding963852/app-clone1/assets/60366769/5386904e-7874-4d34-b1d3-2ea8f5cc8b66)

