
![image](https://github.com/understanding963852/app-clone1/assets/60366769/a1fe1cf8-0e12-451d-84a1-df4af5b232c5)


![image](https://github.com/understanding963852/app-clone1/assets/60366769/20a3c607-85bb-4d9d-a9a5-b2f931bf4c92)


# 실행을 해 보니 깜빡이는 현상이 있다. 차후에는 계속 깜빡이는 현상이 있다면 코드를 아래와 같이 수정해야한다.

            if(scrollRation<=0.22){
                  //in
                  objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);

                }else{
                  //out
                  console.log("실행")
                 objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                }


# 위와 같이 사용했더니 깜빡이는 현상으로 아래와 같이 수정한다..

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

 ////////////////////////////////////////////////////////////////////////// 여기까지 js7
 # 아래에서 type: "normal", 인것들은 높이의 값이 많을 필요가 없다.   
![image](https://github.com/understanding963852/app-clone1/assets/60366769/9af49924-5d50-4bd6-83c0-531f481d6bdd)

![image](https://github.com/understanding963852/app-clone1/assets/60366769/791d30c3-e001-467f-9fbb-5d5f6d127a14)
