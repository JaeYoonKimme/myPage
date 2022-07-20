---
title: 'Daily_study_210825'
date: '2021-08-25'
---

# TIL 2021_08_25
Rust 언어 스터디  
TextBook : The Rust Programming Language (https://doc.rust-lang.org/book/title-page.html)  
Exercise repo : https://github.com/JaeYoonKimme/Rust_Programming_Language  
<br>  
Chapter4 : Understanding Ownership  
    - Rust의 Ownership 개념에 대해서 중점적으로 공부했다.  
    - 변수의 scope? -> 변수의 lifetime  
    - Ownership은 heap영역에 할당되는 변수들간의 규칙으로, 할당된 데이터를 안전하게 관리하고, 풀어줄 수 있게 보장한다.  
    - ownership의 borrowing 개념 공부. -> ownership을 양도하는 규칙.  
    - slice data type 공부.
<br> 

(Rust Ownership rule)

    - Each value in Rust has a variable that’s called its owner.
    - There can only be one owner at a time.
    - When the owner goes out of scope, the value will be dropped.
<br>







