class Foo {
  constructor(n1,n2) {

    if (Foo.singleton) {
      return Foo.singleton;
    }

    this.addedValue = n1+n2;
    Foo.singleton = this;
    return Foo.singleton;
  }
}

const f = new Foo(1,2);
const d = new Foo(10,30);
const e = new Foo(20,30);

console.log(f); 
console.log(d);
console.log(e);