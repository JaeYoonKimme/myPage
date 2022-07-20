---
title: 'Daily_study_210812'
date: '2021-08-12'
---

# TIL 2021_08_12

Runtime Deadlock Detector 프로젝트를 이어서 작업했다.  
https://github.com/JaeYoonKimme/RDD   
<br>  

1. Lock graph 알고리즘에 맞게 프로그램 구현했음  
    - 전달받은 lock, unlock 데이터를 관리하며 그래프 구현.  
    - 그래프에서 cycle 존재여부를 검사하여 dead lock 상황을 detect 할 수 있게 구현했음.  
<br>

2. Source Code 에서 DeadLock 을 일으킨 Line number 정보를 확인 할 수있게 구현하는 중  
    - backtrace(), backtrace_sybols(), addr2line() 의 사용법을 공부했음. 
    - backtrace() 를 활용하면, stack에 쌓인 function call 정보를 획득할 수 있다. 

<br>

해야할 일 : 공부한 함수들 사용하여 line number 추적 기능 구현하기.



---title: 'daily_study_210812'date: '2021-08-12'------
title: 'daily_study_210812'
date: '2021-08-12'
---
