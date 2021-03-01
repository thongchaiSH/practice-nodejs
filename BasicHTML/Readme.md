# Emmet
[เขียน HTML เร็วฟ้าผ่าด้วย Emmet](https://jirayu.in.th/2017/11/fast-html-with-emmet/)

- ใช้ . ในการกำหนดคลาส (ถ้าจะกำหนดหลายคลาสก็ . ต่อกันไปเรื่อยๆ)
- ใช้ # ในการกำหนดไอดี
- ใช้ [] ในการกำหนดแอททริบิวต์อื่นๆ โดยกำหนดเป็น [attr=”value”] เขียนต่อไปหลายๆ อันเพื่อกำหนดหลายแอททริบิวต์
- ใช้ {} ในการใส่ข้อความภายในแท็กนั้นๆ

## Example
```html
<!-- EX1 -->
a.author[name='tets']{clickme}
<a href="" class="author" name="tets">Click Me!</a>

<!-- EX2 -->
ul>.item
<ul>
    <li class="item"></li>
</ul>

<!-- EX3 -->
div.container>div#divItem
<div class="container">
    <div id="divItem"></div>
</div>

<!-- EX4 -->
ul>li*3
<ul>
    <li></li>
    <li></li>
</ul>

```