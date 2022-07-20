---
title: 'Daily_study_210910'
date: '2021-09-10'
---

# TIL 2021_09_10

Computer Network 2주차 공부  
- 네트워크 퍼포먼스의 측정 기준 3가지 : Delay, Loss, Throughput
- Delay의 종류 와 각각 계산방법에 대해서 공부했다  
-> Processing delay  
-> Queueing delay  
-> Transmission delay  
-> Propagation delay
- 'Traceroute' 명렁어를 사용하면 목적지까지 모든 라우터들 사이의 delay를 분석할 수 있음.
- Loss 와 Throughput, bottleneck link 개념 공부.
<br>  
<br>  


Rust 언어 스터디  
TextBook : The Rust Programming Language (https://doc.rust-lang.org/book/title-page.html)  
Exercise repo : https://github.com/JaeYoonKimme/Rust_Programming_Language 
<br> 
 
Chapter11 : Wrutubg Automated Tests
- Rust에서 testing 지원 매크로들의 사용법들을 알아보았다.  
-> assert!, assert_eq!, 등등  
-> #[should_panic]은 panic을 감지가능  
-> Result Enum을 반환하는 형태로도 테스팅이 가능하다.

- Rust에서 지원하는 'cargo test'명령어 공부  
-> test들은 멀티쓰레드로 돌아감 (옵션으로 쓰레드 갯수 설정가능)  
-> '--help', '-- --help' 로 가능한 옵션들 모두 확인가능

- Unit test vs Integration test  
-> 각각의 개념과 RUST에서 이를 지원하는 방식을 공부했다.