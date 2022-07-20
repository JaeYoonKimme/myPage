---
title: 'Daily_study_210813'
date: '2021-08-13'
---

# TIL 2021_08_13

Runtime Deadlock Detector 프로젝트를 이어서 작업했다. 
https://github.com/JaeYoonKimme/RDD   
<br>  

1. DeadLock 을 일으킨 소스코드 라인을 출력할 수 있게 구현했음.  
    - backtrace(), addr2line() 함수 활용하여 구현.
    - backtrace를 통해 얻은 주소를 주고받는 프로토콜 추가

<br>

2. DeadLock Detection을 library자체에서 지원하는 ddtect.so를 만들었다.
    - fifo 채널을 통해 데이터를 주고받을 필요 없이 lock, unlock 함수 내에서 deadlock detection 지원.

<br>

해야할 일 : 이미 일어난 deadlock 체크 뿐만 아니라, 일어날 수 있는 상황 예측하게 구현해보기.



