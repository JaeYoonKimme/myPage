---
title: 'Daily_study_210817'
date: '2021-08-17'
---

# TIL 2021_08_17

Runtime Deadlock Detector 프로젝트 작업
https://github.com/JaeYoonKimme/RDD   
<br>  

1. 이미 일어난 DeadLock이 아니라, 발생가능한 상황 예측하기.  
    - 예측 프로그램 ddpred.c 프로그램을 새로 만들었다.
    - 기존 ddchck.c 에서 unlock 시에 release 하는 부분을 제거하는 것이 아이디어. 단 예외사황들을 처리해야한다.
    - 참고하여 공부한 논문 https://www.havelund.com/Publications/deadlock-IBM-2010.pdf 

<br>

2. file pointer를 통해서 데이터를 읽어와서 메모리에 올리는 작업을 차근차근 살펴보았음.
    - fread, strdup등을 사용했음. 
    - string 관련 함수를 사용할때는 메뉴얼을 잘 읽어보고 마지막 문자열 널 처리를 해주는지 읽어봐야 할 것 같다.
    - file pointer 와 file descripter의 차이..?

<br>

해야할 일 : 만든 아이디어대로 프로그램 차근차근 구현하기.



