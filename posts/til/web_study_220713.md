---
title: 'Web_study_220713'
date: '2022-07-13'
---

# TIL 2022_07_13
React.js 공부  
- js의 filter함수를 공부하고 사용해보았다.
- Routing개념, React-router-dom 라이브러리에 대해서 알아보았다.
- props는 컴포넌트의 외부 인터페이스, state는 내부 인터페이스를 제공하는 개념이다.
- React는 setState의 인자와 원본 데이터를 비교하며 렌더링을 진행하기 때문에, state의 immutability를 유지해야한다.(Immutable.js등의 라이브러리 있음)
- Ajax란? -> asynchronous javascript and xml의 약어.  
js에서는 fetch()를 통해 요청하고 then()을 통해 처리하는 식으로 사용.

- React에서는 component밖에서 일어나는 이벤트를 side effect라고 한다.(useEffect객체, useSideEffect()등을 통해서 관리)