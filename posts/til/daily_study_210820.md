---
title: 'Daily_study_210820'
date: '2021-08-20'
---

# TIL 2021_08_20

Sthread프로젝트 작업(UserLevel Thread 구현)
http://www.it.uu.se/education/course/homepage/os/vt18/module-4/simple-threads/  
<br>  

Sthread API에 mutex lock, unlock 기능을 추가했다.  
    - mutex_t structure 추가  
    - lock, unlock 하는 동안 timer interrupt를 disable 하도록 구현했음.  

<br>

해결해야할 에러 -> timer 의 interval 값이 작아지면, setitimer()를 하는 동안에 interrupt 가 발생할 수 있는 문제  
-> signal 함수 대신 sigaction 을 사용하여, 관련된 옵션을 설정할 수 있다.  



<br>






