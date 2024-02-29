function* generator(i) {
    yield i;
    yield i + 10;
    yield 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);

  
  console.log(gen.next().value);
  console.log(gen.next()); 
  console.log(gen.next()); 