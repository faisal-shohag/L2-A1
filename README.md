TypeScript is like JavaScript but it help us write better code. Today, I write about two things: Interfaces vs Types and Enums in TypeScript.

## 1. Interfaces vs Types in TypeScript

TypeScript have two ways to make shapes for our data: **interfaces** and **types**. They look same but they different in some ways. Let me explain like I talk to my friend.

### What is Interface?
Interface is like a rule for how something should look. For example, if I make a `Person`, I can say it must have a name and age. Like this:

```typescript
interface Person {
  name: string;
  age: number;
}
```

Now, if I make a person, TypeScript check if it follow the rule. If I forget `age`, it shout at me (not really, just show error).

### What is Type?
Type is also a way to make rules, but it more flexible. I can use it for more things, not just objects. For example:

```typescript
type Person = {
  name: string;
  age: number;
};
```

This look like interface, right? But I can also use `type` for other stuff, like:

```typescript
type Color = "red" | "blue" | "green";
```

This mean `Color` can only be "red", "blue", or "green". Cool, right?

### Differences
1. **Extending**: Interface can add more rules using `extends`. Like:

```typescript
interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark: boolean;
}
```

`Type` can do this too, but with `&` (intersection). It’s little different.

2. **Declaration Merging**: Interface can merge if you write same name again. For example:

```typescript
interface Car {
  wheels: number;
}

interface Car {
  color: string;
}
```

Now `Car` have both `wheels` and `color`. Type can’t do this. If I try same name with type, TypeScript get mad.

3. **Flexibility**: Type can do more things, like unions (`|`), intersections (`&`), or even simple values. Interface is mostly for objects.

---

## 2. Enums in TypeScript

Enums is like a list of things that don’t change. It make code easier to read. For example, instead of writing "left" or "right" everywhere, I can use enum to make it neat.

### Numeric Enum
Here is example of numeric enum:

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

TypeScript give numbers to each one: `Up = 0`, `Down = 1`, `Left = 2`, `Right = 3`. I can use it like this:

```typescript
let move: Direction = Direction.Left;
console.log(move); // This print 2
```

I can also set my own numbers:

```typescript
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}
```

Now `Up` is 1, not 0. This is useful if I want control numbers.

### String Enum
String enum is when I want words instead of numbers. Like this:

```typescript
enum Color {
  Red = "RED",
  Blue = "BLUE",
  Green = "GREEN"
}
```

I can use it like:

```typescript
let myColor: Color = Color.Blue;
console.log(myColor); // This print "BLUE"
```

### Why Enums Cool?
Enums make code clear. Instead of writing `1` or `"RED"`, I use `Direction.Up` or `Color.Red`. It easier to understand what I mean. Also, TypeScript check if I use wrong value. If I try `Color.Purple` but it not in enum, it give error. This save me from silly mistakes.

Thanks for reading my blog. Sorry if my English is not perfect.😅