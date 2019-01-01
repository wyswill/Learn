const obj = {
  add(prom, value) {
    Object.defineProperty(this, prom, {
      value: value,
      writable: false
    });
  }
};
