(function () {
  class MyClass {
    static [Math.random()] = "random";
  }
  const instance = new MyClass();
  console.log(MyClass[Math.random()]);
})();
