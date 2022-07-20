---
title: 'Daily_study_210809'
date: '2021-08-09'
---

# TIL 2021_08_09

Runtime Deadlock Detector 프로젝트 시작  
https://github.com/JaeYoonKimme/RDD  
관련된 내용들을 공부하고, 적용하여 보았다.  
<br>  


1. Build 의 개념과 과정 복습  
    - preprocessing -> compile -> linking
    - dynamic linking vs static linking

<br>

2. Library Interpositioning 개념 및 방법 공부  
    - Interpositioning이라는 방법을 통해 library함수를 가로채서 사용할 수 있다.  
    - 이것을 응용해서 monitoring에 활용할 수 있음. 

<br>

3. RDD(Runtime Deadlock Detector) 구현
    - pthread library를 runtime interpositioning해서 lock, unlock 정보를 가져오는 ddmon.so 를 만들었음.