class vNode {
  constructor(element, attr, children) {
    this.element = element;
    this.attr = attr;
    this.children = children;
  }
}
function h(element, attr, children) {
  if (element.includes(".")) {
    element = element.split(".");
    attr.class = element[1];
  }
  if (element.includes("#")) {
    element = element.splite("#");
    attr.id = element[1];
  }
  return new vNode(element[0], attr, children);
}
function render(container, vdom) {
  //将vNode解析，添加到container中.
  let ele = document.createElement(vdom["element"]);
  ele = setAttr(ele, vdom.attr);
  ele = setChildren(ele, vdom.children);
  container.append(ele);
  return container;
}
function setAttr(ele, attr) {
  for (let i in attr) {
    ele.setAttribute(i, attr[i]);
  }
  return ele;
}
function setChildren(ele, children) {
  for (let i in children) {
    let chele = document.createElement(children[i].element);
    chele = setAttr(chele, children[i].attr);
    if (typeof children[i].children[i] != "object") {
      chele.innerHTML = children[i].children;
    } else {
      for (let i in children) {
        let chele = document.createElement(children[i].element);
        chele = setAttr(chele, children[i].attr);
        chele = chele.append(render(chele, children[i].children));
        console.log(chele);
      }
    }
    ele.append(chele);
  }
  return ele;
}
let vdom = h("div.test", { id: "testid" }, [
  h("li.ch", {}, ["ch1"]),
  h("li.ch", {}, ["ad"])
]);
let container = document.querySelector(".container");
render(container, vdom);
