# dom.js 
### DOM Manipulation Simplified
[See It In Action](test.html) • [Made By SX-9](https://new.sx9.is-a.dev)

Tired Of Typing Document Query Selectors? Use This Instead!

## Install Me!
```html
<script src="https://dom.js.org/dom.js"></script>
```

```html
<h1>Hello World!</h1>
<script src="dom.js"></script>

<script>
  const $ = domjs.init(document);
  $.el('h1').innerText = 'dom.js';
  // $.el === document.querySelector
  // $.els === document.querySelectorAll
  // $.create === document.createElement
  // $.event === document.addEventListener
</script>
```
