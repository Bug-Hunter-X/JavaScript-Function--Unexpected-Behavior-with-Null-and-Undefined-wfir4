function foo(a, b) {
  if (a === null || b === null) {
    return null; // This line handles null values
  }

  return a + b; // Potential error: what if a or b is undefined?
}