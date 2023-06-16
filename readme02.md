# 스크롤 애이메이션 구현 4 부터
# main.js

![image](https://github.com/understanding963852/app-clone1/assets/60366769/13a94afd-0ee8-4cae-8192-d61c9f90fbdd)


![image](https://github.com/understanding963852/app-clone1/assets/60366769/5768b504-53a0-46b4-8f08-bffd1f7e6633)


# 스크롤을 중간에 두고 새로고침한다거나 할때도   제대로 실행되게 하기위해
![image](https://github.com/understanding963852/app-clone1/assets/60366769/f94f1c6e-a1d3-4abc-913b-1c9ac239ed97)

![image](https://github.com/understanding963852/app-clone1/assets/60366769/6e5f3c5e-81e3-4d68-9066-a1989362905f)

# 아래와 같이 중간에 잘못된 값이 나올때가 있다. 
![image](https://github.com/understanding963852/app-clone1/assets/60366769/bfe3a448-991c-438e-9c96-fcc35639e54d)

# 🥩 해결방법은    --> 씬을 바꿀때 처리해 준다..

# 변수를 만들어서 그 변수가 true가 되는순간은 씬이 바뀌는 순간이다라고 인식하게 만든다  
# 새로운 씬이 시작되는 순간 true가 된다
![image](https://github.com/understanding963852/app-clone1/assets/60366769/fb1114b7-4931-4e32-bcab-f15f9b2122b9)

# 1️⃣ 스크롤을 움직일때마다 기본적으로 false가 지정되고 2️⃣ 는 씬이 바뀌는 순간이고 값이 바뀌는 순간 true가 되게한다.  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/d695b03c-15cb-4b4d-93a3-74b61e3ce6b8)

# enterNewScence이 true일때 잠깐동안은 scrollLoop함수를 종료한다.
![image](https://github.com/understanding963852/app-clone1/assets/60366769/06bb935e-fe32-47b4-95e4-58416c1d22fd)

# ➡️ 씬이 바뀔때 마이너스 값이 나오는것을 처리할수 있다      


# 영상제목 : 특정 타이밍 스크롤 애니메이션 기능 추가  
# start와 end가 글자가 나타나고 사라지는 지점을 적은것이다.  
# 한영역의 전체 스크롤이 1이라고 계산한다
# messageA_opacity 가 나올시점이 start에 사라지는 시점은 end에 적는 것이다. 나머지 text들도 그런식으로 적어준다  
![image](https://github.com/understanding963852/app-clone1/assets/60366769/fe1a4e5b-511d-4a90-9477-b9184c6242f4)



