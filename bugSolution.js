function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; //Handles both null and undefined
  }

  return a + b;
}