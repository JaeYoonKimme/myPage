---
title: 'Cpp_study_210727'
date: '2021-07-27'
---

# C++ STUDY - DAY 2
C++ Crash Course  
-Chapter3 Reference Types,  
-Chapter4 The Object Life Cycle (~Call Stack Unwinding 까지)

<br>

1. Chapter3 Reference type : C++ 의 Pointer, Reference, Const, auto 개념을 공부했다.
    - Pointer는 C에서의 개념과 동일. void* 에서 arithmetic은 허용되지 않음. object 안에서 스스로를 가리키는 포인터 this 사용가능
    - Reference type은 ampersand & 를 통해서 선언과 동시에 initialize 하며, 다른 reference로 바꿀 수 없음
    - Auto type-> 자동으로 variable type을 결정할 수 있음

<br>

2. Chapter4 The Object Life Cycle : Static, Object의 life cycle, Exception handling 개념들을 공부했다. 
    - Global에서, function내에서, Object내에서 각각 static 사용법이 다름
    - thread_local 키워드를 사용하면, thread 마다 각각 고유한 static변수를 사용 가능
    - variable, object의 life scope에 대해서 알아봄. -> 언제 object가 construc, destruct 되는지..
    - Exception throw, catch 사용법 공부. Nested한 상황에서 어떻게 처리되는지 알아봄 

