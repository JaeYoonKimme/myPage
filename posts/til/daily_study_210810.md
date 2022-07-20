---
title: 'Daily_study_210810'
date: '2021-08-10'
---

# TIL 2021_08_10

Runtime Deadlock Detector 프로젝트 이어서 작업  
https://github.com/JaeYoonKimme/RDD   
<br>  

1. Dead Lock 을 일으키는 몇가지 test case들 구현했다.
<br>

2. Named Pipe 채널을 사용하여 Pthread Lock, Unlock 에 대한 정보를 전달하게 구현했음. 
    - mkfifo로 .ddtrace 채널을 열어 데이터 전송.
    - Protocol :  
        -> lock인지 unlock인지 전달(0 or 1 integer)  
        -> Thread id 전달 (long)  
        -> Pthread_mutex 변수의 pointer 전달 (pthread_t*)

<br>



