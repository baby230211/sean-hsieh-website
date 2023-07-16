---
sidebar_position: 1
---

# Manage Type in Typescript


## Use As Const

```js title="manageUnion.ts"
declare function handleRequest(url: string, method: "GET" | "POST"): void;


const req = { url: "https://example.com", method: "GET"};
handleRequest(req.url, req.method);
// This will error
Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

## Workaround on this type error

The example above req.method inferred to be `string`, not `GET`. Because code can be evaluated between the creation of req and the call of `handleRequest` which could assign a new string like `GUESS` to req.method.
You can update your code in two ways.
1. You can change the inference by adding a type assertion in either location:
```ts
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```
2. You can use as const to convert the entire object to be type literals
```ts
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

## Exhaustiveness checking

The `never` type is assignable to every type; however, no type is assignable to `never` (except `never` itself). This means you can use narrowing and rely on `never` turning up to do exhaustive checking in a `switch` statement

For example, adding a `default` to our `getArea` function which tries to assign the shape to `never` will not raise error when every possible case has been handled.

```ts
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius **2;
    case "square":
      return shape.sideLength **2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck
  }
}
```
When Adding a new member to the `Shape` union, will cause Typescript error, if you forget to handle the case in `getArea` function

```ts
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
// This will error
Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
}
```