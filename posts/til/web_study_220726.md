---
title: 'Web_study_220726'
date: '2022-07-26'
---

# TIL 2022_07_26
Django에서 unit test기능을 공부하고 사용해보았다.
- Model, View 각각 테스트 방법을 공부하고 적용해보았음
- ORM 개념에 대해서 알아보았음 (정의, django의 lazy loading)

Rest api를 공부하고 Django에서 구현해 보았다
- rest api의 표현 방법(약속)
- 관련된 tool을 사용해서 만든 서버를 테스트 해보았음(Postman)
- rest api와는 다른 형태인 graph ql에 대해서도 알아보았다


<!--
Django에서 unit test기능을 공부하고 사용해보았다. (Model unit test, View unit test)
- Model unit test는 기존에 알고있던 unit test와 흡사한 형태 
- View test 의 경우에는 django shell을 사용하여 가능. django 내부적으로 http request를 쏘는 것 처럼 동작하고, response 를 확인할 수 있는 형태로 진행한다. 
- Response의 status code, template 뿐만 아니라, parameter로 넘겨준 내용들이 ‘context’라는 구조에 담겨있어 이를 확인이 가능하다. 
- ORM(object-relational mapping)이란? -> model 형태로 표현된 객체와 database를 연결하여 관리하는 방식. 직접 쿼리로 access하는 것이 아니라, model과 상호작용하는 방식으로 database를 편하게 관리할 수 있다. 
- django ORM 에는 lazy indexing방식이 적용됨. 최종적으로 데이터가 사용될 때 쿼리를 날린다.

Rest api를 공부하고 Django에서 구현해 보았다
- web에서 url을 통해서 api를 제공하는 형태로, url은 리소스로만 표현 하고, 동작은 http 메소드로 표현한다(get, put, delete...)
- Postman rest api tool을 사용해 쉽게 테스트가 가능하다
- (+)graph ql은 일종의 쿼리언어로, restapi 스타일과는 달리 클라이언트에서 바로 쿼리 작성 가능
-->
