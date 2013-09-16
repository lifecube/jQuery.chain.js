jQuery.chain.js
===============

jQuery plugin to chain async functions to execute sequencially, current function's return value or returned defered object resolve parameters will be transfer to next function as parameters.

Take a look the example [here](http://jsfiddle.net/lifecube/jt2Fr/)

All ajax call should be wrapped by a function, to wait to be started one by one.

How to use it
-------------
```html
<!--place it after jQuery.js-->
<script type="text/javascript" src="http://rawgithub.com/lifecube/jQuery.chain.js/master/js/jQuery.chain.js"></script>
```

Then send the parameters or functions

```javascript
$.chain({param:value},function1, function2).then(success, failure);
```
