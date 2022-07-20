---
title: 'Daily_study_210819'
date: '2021-08-19'
---

# TIL 2021_08_19

Sthread프로젝트 작업(UserLevel Thread 구현)
http://www.it.uu.se/education/course/homepage/os/vt18/module-4/simple-threads/  
<br>  

1. Sthread init(), spawn() 등 기본적인 쓰레드 함수들 구현 완료. 
    - itimeval, setitimer() 등 sys/time.h 라이브러리 사용법 공부
    - timer interrupt signal, handler 를 활용하여 일정시간마다 스케쥴링이 다시 진행되도록 구현했음

<br>

2. join(), done() 기능을 추가하여 쓰레드의 waiting status 관리를 추가했음.


<br>

해야할 일 : mutex lock, conditional variable, semaphore 기능 추가해보기 





