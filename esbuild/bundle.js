var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  var _a;
  class MyClass {
  }
  _a = Math.random();
  __publicField(MyClass, _a, "random");
  const instance = new MyClass();
  console.log(MyClass[Math.random()]);
})();
