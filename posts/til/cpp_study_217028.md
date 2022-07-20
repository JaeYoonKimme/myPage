---
title: 'Cpp_study_210728'
date: '2021-07-28'
---

# C++ STUDY - DAY 3
C++ Crash Course    
-Chapter4 The Object Life Cycle  
-Chapter5 Run time polymorphism  
-Chapter6 Compile time Polymorphism

<br>

1. Chapter4 나머지부분 공부. lvalue, rvalue개념을 가지고 copy, move 를 비교하며 구현해보았다. 
    - lvalue는 이름을 가지는 value, rvalue는 그외에 임시로 값을 표현하는 value. 대입연산자(=)를 쓸 때, 위치에 따른 이름.

<br>

2. Chapter5 runtime polymorphism : interface class(base class), virtual 키워드, class type injection 을 알아봄.
    - Interface class와 virtual 키워드를 사용하여 여러가지 variation class들의 구조를 제한, 지원 할수있음. 
    - base class object를 가지는 객체에 특정 하위 class type을 inejction하는 방법 두가지를 알아봄.(reference, pointer)

<br>

3. Chapter6 Compile time polymorphism 초반부 공부. templates개념, Named-conversion(cast) 함수들을 간단하게 알아봄.
    - templates는 compile time에 type을 결정하여 polymorphism을 구현하게 지원한다. 
    - 매번 여러 type에 따른 overriding을 하지 않아도, template을 통해서 여러 type을 지원할 수 있다. 

