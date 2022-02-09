# 참고할 사이트

CSS reference : MDN : https://developer.mozilla.org/ko/

CAN I USE : 사이트에서 브라우저마다 사용할수 있는 호환성 속성이 나와있다.

color tool : 이쁜 색 조합

CSS-TRICKS : Flex 속성들 공부

fontawesome.com : 무료 아이콘 사용 가능 메일로 코드 받고 받은 코드를 head안에 붙여넣기

Google Font : 폰트 무료 사용 가능!!

# CSS(Cascading Style Sheet)

정의 되어있는 style이 있으면 해당 style 쓰고 없다면 다음 기본으로 지정된 style로 넘어간다.

Cascading 순서 Author style -> User Style -> Brower

Boxing(tag)을 잘해야지 선택자를 잘 정해 CSS 적용하기 편하다.

## 3가지 단위 px | em | rem

# Selectors(선택자)

1. Universal(모든 태그) : \*
2. type(해당 태그) : Tag(ex. div)
3. ID : #id
4. Class : .class
5. State : :
6. Attribute : [] (ex. a[href] anchor 태그중 href가 붙은 것만)
7. 속성 값 뒤에 !important 를 붙인 속성 (important는 디자이너와 개발자 사이에 중요한 속성이라는 약속)
8. HTML에서 style을 직접 지정한 속성
9. #id 로 지정한 속성
10. .클래스, :추상클래스 로 지정한 속성
11. 태그이름 으로 지정한 속성
12. 상위 객체에 의해 상속된 속성

## padding, margin

padding은 컨텐츠 내부의 space

margin 은 컨텐츠 외부의 space

padding, margin 설정방법 4가지

1. padding: 20px 동서남북 전부
2. padding-bottom: 20px 방향 한쪽식
3. padding: 20px 0px 앞의 값 위/아래 뒷값 양/옆
4. padding: 20px 30px 20px 10px 위 오 아래 왼

### border 설정 2가지

1. border-width: 2px;
   border-style: solid;
   border-color: pink;
2. border: 2px solid red;

## 선택자

하위 선택자 "공백" --> div p // 자손(자식 손자 증손자...)을 선택하는 것이다.

자식 선택자 ">" --> article > p // 자식을 선택하는 것이다.

인접 형제 선택자 "+" --> h1 + p // 동등한 위치(h1)에 있는 태그(p 형제)중에 가장 가까이 있는 첫번째 형제 **하나**만 선택

일반 형제 선택자 "~" --> h1 ~ p // 동등한 위치(h1)에 있는 모든 태그(p)들

Pseudo-class 선택자 --> p:first-child // p의 형제들중 첫번째 요소

p:only-child // p 태그를 부모로 가지고 p 속에 하나밖에 요소가 없는경우 그 요소 선택

plate:nth-child(3) // 3번째이면서 plate인 요소를 선택 (3번째 plate를 선택하는것이 아님. 만약 plate, plate, bento, plate가 있다면 plate:nth-child(3)를 해도 아무것도 선택되지 않음.

plate:nth-of-type(even) // plate중 짝수번째 plate를 모두 선택 (nth-child와는 다르게 plate중에서만 선택함. 만약 plate, plate, bento, plate가 있고 plate:nth-of-type(odd)를 한다면 1,4번째 plate가 선택됨. plate 중에서는 1,3번째이므로!)

# Display , Position

## Display

<li>inline : 내부 컨텐츠 크기만큼의 사이즈를 가진다. 따라서 내용이 꼭 필요하다. (물건이라고 볼 수 있다.)
<li>inline-block : 상자인데 한줄에 여러개의 상자가 들어갈 수 있다.
<li>block : 상자인데 한줄에 하나의 상자만 가능하다.

> display로 inline과 block, inline-block 으로 구조변경 가능하다. ex) display: inline-block

## Position

<li>static(정적위치) : Position의 초기값이고 top,right...속성값에 영향을 받지 않는다.

<li>relative(상대위치) : 해당 HTML 요소의 기본위치를 기준으로 위치를 설정한다.

<li>fixed(고정 위치) : viewport를 기준으로 설정한다.(웹페이지가 스크롤 되어도 고정 위치로 위치하게된다.

<li>absolute(절대 위치) : 설정된 조상(ancestor) 요소를 기준으로 위치를 설정하게 된다. 만약 조상 요소를 가지지 않는다면 body 요소를 기준으로 위치를 설정하게 된다.

<li>sticky : 스크롤 해도 원래위치 그대로 있게 설정

# Flex

# FlexBox

float는 이미지와 텍스트를 배치하기 위해 만들어진 속성이다.(left, center, right)

FlexBox에서 중요한 두가지 이해하기!!! (자세한 내용은 CSS_FlexVox.css에 있다.)

첫번째 Container box에 적용되는 속성값 존재(display, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content)
box안의 item에 적용되는 속성값 존재(flex-grow, flex-shrink, flex, align-self, order)

두번째 main axis(중심축)과 cross axis(교차축)이있다. (수직 수평중 하나가 중심축이 된다면 반대 축은 교차축이 된다.)

<li>예시는 [CSS_FLEXBOX]() 파일에서</li>

# Media Query

Media Query는 단말기의 유형(출력물 or 화면)과 어떤 특성이나 수치(화면 해상도, 뷰포트의 너비)등에 따라 웹사이트나 앱 스타일을 수정할때 유용하다.

## Media 유형

<li>all : 모든 장치에 적합
<li>print : 인쇄 결과물 및 출력 미리보기 화면에 표시 중인 문서(프린터 , 오디오 기반 스크린 리더)
<li>screen : 주로 화면 대상
<li>speech : 음성 합성장치 대상

## 논리연산자 사용가능

<li>and : 다수의 미디어 특성을 조합하여 하나의 미디어 쿼리를 만들 때 사용한다. 전체 쿼리가 참이여야지 참이 된다.
<li>not : 쿼리가 거짓일 때만 참을 반환합니다. 미디어 쿼리 전체를 부정하고 쉼표로 구분한 쿼리 목록 중 하나에서 사용한 경우 전체 쿼리가 아닌 해당하는 하나의 쿼리에만 적용됩니다.
<li>',' : 쉼표는 다수의 미디어 쿼리를 하나의 규칙으로 조합할 때 사용합니다. 쉼표 내의 쿼리는 별개로 취급한다. 단 하나의 쿼리만 참을 반환해도 조건 전체가 참이된다. 즉 OR 연산자 처럼 작용된다.
<li>only : only를 사용하면 미디어 특성을 지정하는 미디어쿼리를 서포트하지 않는 낡은 브라우저에 대응하여 특정 스타일을 적용하는 것이 가능하다.

## 미디어 기능 특정하기

> 범위 기능으로 최소 조건(min-) 최대 조건(max-)로 제약을 나타낸다.
> 뷰포트가 12450px 이하인 경우에만 스타일을 적용하고 싶다면 아래와 같이 사용하면 된다.

> @media (max-widyh: 12450px){}

## Media Query 예시

@ media (조건) { 스타일 실행 코드 }

```css
@ media screen and (min-width: 800px){
   .container {
      width: 50%;
   }
}
```
