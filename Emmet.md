# Emmet이란

html,css 등을 작성할때, 시간을 단축시켜주는 강력한 자동완성 기능이고 단축키는 tab이다.
Emmet에 대한 자세한 내용 https://emmet.io/

## HTML 양식 만들기

```html
<!-- ! 누르고 tab 키 -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## div 태그 작성

```html
<!-- div -->
<div></div>
<!-- div.className -->
<div class="className"></div>
<!-- div#IdName -->
<div id="IdName"></div>
<!-- .class div는 워낙 자주 쓰여서 생략해도 생성된다. -->
<div class="class"></div>
```

## 부모, 자식, 형제 노드 관계

```html
<!-- '>'  자식노드   div>ul>li -->
<div>
  <ul>
    <li></li>
  </ul>
</div>
<!-- '+'  형제노드   div>ul+ol  -->
<iv>
  <ul></ul>
  <ol></ol>
</iv>
<!-- '*'  반복태그   ul>li*5 -->
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<!-- '^'  부모위치로 div>ul>li^ol -->
<div>
  <ul>
    <li></li>
  </ul>
  <ol></ol>
</div>
```

## 그룹화하기

```html
<!-- '()' div>(header>ul>li*2>a)+footer>p -->
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

## 태그안에 텍스트 입력하기

```html
<!-- '{}'  p{hello} -->
<p>hello</p>

<!-- '$' 자동 숫자 할당  p.class${item %}*5 -->
<p class="class1">item %</p>
<p class="class2">item %</p>
<p class="class3">item %</p>
<p class="class4">item %</p>
<p class="class5">item %</p>
```

## 더미용 텍스트

```html
<!-- 'lorem' p>lorem-->
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero
  perspiciatis, provident sapiente aperiam earum eum obcaecati aliquid
  cupiditate esse temporibus amet, laborum sint recusandae, nulla ipsam deleniti
  odio inventore.
</p>
<!-- 'lorem' p>lorem4 뒤에 숫자만큼의 더미단어가 생긴다.-->
<p>Lorem ipsum dolor sit.</p>
```
