function animo() {
  this.dok = () => {
    console.log("动物叫");
  };
}
function dog() {
  this.eat = () => {
    console.log("狗要吃饭");
  };
}
dog.prototype = new animo;
let hsq = new dog();
/* js继承理解
---------------------------- */
/* 
new dog()的时候dog构造函数创建一个空对象，将属性绑定到对象上，再将这个对象赋值给变量。

在声明子类的实例之前，执行dog.prototype = new animo;
将dog构造函数的原型更改成animo的对象。这样dog的原型上就有了animo的属性。
这样就实现了继承

*/