HTML은 "태그" 등을 이용하여 문서나 데이터의 구조를 분명히 기록하는 Markup 언어다.
MDN 사이트 참고하기 여러 태그들과 예시들이 잘 나와있다.
Validator 사이트에 틀리거나 잘못된 부분 확인 가능하다.

# HTML의 구조

html 태그안에 head와 body로 나눠져있다.

<li>head는 사용자에게 보여지는 UI가 아닌 title, 북마크, css파일연결 등 메타데이터로 이루어져있다.
<li>body는 유저에게 보여지는 중요한 컨테이너이다.

## 박스모델를 작은 단위로 나눠야되는 이유

1.css styling 할때 조금더 sturcture 있게 할수있음!

2.react라는 프로그램 할때 하나의 커다란 component를 사용하면 performance가 별로인데 작은단위로 잘 쪼개노면 좋음!!

## 태그

태그들은 박스 Or 아이템이다.

박스는 사용자에게는 보이지 않고 영역 개념이다. 아이템은 사용자에게 보여진다.

박스 예 : header, footer , nav , aside , main , section, article, div, span, form

아이템 예 : a, button, input, label, img, video, audio, map, canvas, table

## 태그들 연습

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>HTML DEMO</title>
  </head>
  <body>
    <!-- Box vs Item -->
    <!-- Box -->
    <header></header>
    <footer></footer>
    <div></div>
    <span></span>


    <!-- Item -->
    <h1></h1>
    <button></button>

    <!-- a anchor tag로 하이퍼링크를 달아주는 태그이다.-->
    <a href="https://google.com" target=_blank>Click</a>

    <!-- Block vs Inline  div랑 p는 Block이고 span이랑 b는 inline이다.-->
    <p>This is a sentetnce. <b>That</b>  is....</p>
    <p>This is a sentetnce. <span>That</span>  is....</p>
    <p>This is a sentetnce. <div>That</div>  is....</p>


    <!-- ol , ul , li 꿀팁 ol>li*3-->
    <ol type="i" reversed>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>

    <ul>
      <li>Hello</li>
      <li></li>
      <li></li>
    </ul>

    <!-- input -->
    <label for="input_name">Name:</lable>
    <input id="input_name" type="text">

  </body>
</html>
```
