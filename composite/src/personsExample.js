import Person from './constructors/Person'

const root = new Person('Fred'),
  child1 = new Person('John'),
  child2 = new Person('Jane'),
  child3 = new Person('Jack'),
  child4 = new Person('Jill'),
  child5 = new Person('James'),
  child6 = new Person('Jess');

console.log(`\n********** Persons Example **********`)
root.addChild(child1);
root.addChild(child2);

child2.addChild(child3);
child2.addChild(child4);

child4.addChild(child5);

child5.addChild(child6);

// root.traverseDown();
// child6.traverseDown();

child6.traverseUp();