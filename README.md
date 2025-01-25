# JavaScript Function Bug: Handling Null and Undefined

This repository demonstrates a common error in JavaScript functions when dealing with potentially null or undefined values.  The function `foo` attempts to add two numbers.  While it explicitly checks for `null`, it fails to address `undefined` values. This can lead to unexpected results or runtime errors.

The solution demonstrates how to robustly handle both `null` and `undefined` values to prevent such issues.  This is important for writing reliable and maintainable JavaScript code.

## Bug

The original code is found in `bug.js`. It contains a flaw where it only checks for `null` and not `undefined`, leading to incorrect behavior when either input is `undefined`.

## Solution

The corrected code is provided in `bugSolution.js`. The solution explicitly checks for both `null` and `undefined` values to prevent unexpected outcomes.  It provides more robust error handling.