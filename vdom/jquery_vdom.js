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
    element = element.split("#");
    attr.id = element[1];
  }
  return new vNode(element[0], attr, children);
}
function render(container, vdom) {
  //将vNode解析，添加到container中.
  let ele = createElement(vdom);
  container.append(ele);
  return container;
}
function createElement(vdom) {
  let ele = document.createElement(vdom["element"]);
  ele = setAttr(ele, vdom.attr);
  ele = setChildren(ele, vdom.children);
  return ele;
}
function setAttr(ele, attr) {
  for (let i in attr) {
    ele.setAttribute(i, attr[i]);
  }
  return ele;
}
function setChildren(ele, children) {
  children.forEach(element => {
    if (typeof element == "object") {
      let chele = createElement(element);
      ele.append(chele);
    } else if (typeof element == "string") {
      ele.append(element);
    }
  });
  return ele;
}
let vdom = h("div.test", { id: "testid" }, [
  h("li.ch", {}, [h("div#asd", {}, ["ch1"])]),
  h("li.ch", {}, ["ad"])
]);
let container = document.querySelector(".container");
render(container, vdom);
