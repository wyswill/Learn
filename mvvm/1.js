class Vue {
  constructor(config) {
    let { el, data } = config;
    for (let key in data) {
      (key => {
        Object.defineProperty(this, key, {
          get() {
            return data[key];
          },
          set(newVal) {
            data[key] = newVal;
            this.change(el, key);
          }
        });
      })(key);
    }
    this.change(el); //第一次渲染
  }
  change(el, key) {
    let ele = document.querySelector(el);
    let ele_val = ele.innerHTML;
    let reg = /[a-zA-Z]/gi;
    let res = ele_val.match(reg);
    if (res != null) {
      res = res.join("");
      ele.innerHTML = this[res];
    } else {
      ele.innerHTML = this[key];
    }
  }
}
