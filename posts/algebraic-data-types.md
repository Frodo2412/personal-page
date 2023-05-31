---
title: 'Algebraic Data Types'
date: '2022-12-31'
excerpt: "While in the object oriented world you might use classes to model your domain, in functional programming you will use Algebraic Data Types."
---

When I first started getting into functional programming, the term algebraic data type was one of the terms that I found
everywhere I looked. It sounds like a really “math-y” concept, and my imperative, object oriented self who was used to
Abstract Data Types didn’t really understand what they were.

Let’s start with a definition:

> In computer programming, especially functional programming and type theory, an algebraic data type (ADT) is a kind of
> composite type, i.e., a type formed by combining other types.

Well, that doesn’t tell us much does it? Well, at the bottom of this idea is a very simple concept: everything is a set.
More specifically, a type is the set of all possible values a field of that type could possibly take, so we could think
as the Int type as the set of all representable integers.
With this in mind, we can now talk about how to compose different types. Given that we are talking about sets, there are
to basic operations we can consider:

1. The union between sets which gives rise to sum types
2. The cartesian product between sets which gives rise to product types.

So an algebraic type is just a type that combines other types via one of the operations described above. Let’s go into a
bit more detail and see how we can implement this in Scala.

# Sum Types

So a sum type corresponds to the OR keyword. It’s a field that contains a value in this set OR a value in that set (we
can compose more than two sets in this way). Enumerations are actually just really simple sum types.

```scala
enum Color {
  Red,
  Blue,
  Yellow
}

Color aColor = ??? // This must be Red OR Blue OR Yellow
```

In Scala we implement Sum Types via inheritance with case classes/objects. Why case classes? Because they come equipped
with an unapply which allows us to do all sorts of pattern matching goodness.

You see, enumerations are actually a really weak type of sum type where all the types that compose it are singleton sets
composed of a constant. But in reality, we can compose any types together. Let’s see an example:

```scala
sealed trait User {
  def userName: String
  def email: String
}

case class Admin(override val userName: String, override val email: String, department: String) extends User
case class Customer(override val userName: String, override val email: String, address: String) extends User
```

Then we can use all that pattern-matching goodness to process this inside a method:

```scala
def processUser(user: User) = user match {
    case Admin(userName, email, department) => ???
    case Customer(userName, email, address) => ???
}
```

So now we can access all the information specific to each type inside the corresponding case thanks to the unapply
method. Also, the Scala compiler will make sure we are considering every possible case, which is really powerful.

# Product Types

If Sum Types Correspond to the OR word, product types correspond to the AND word. As in I contain a value of this type
AND a value of that type (again, we can join more than two types in this way). We call each of these values fields.

Going back to set theory, this corresponds with taking the Cartesian product of the sets involved. There are several
ways of implementing product types, the most common being records and tuples.

```scala
val address: (String, Int) = (“Baker Street”, 221) // adress must have a String field AND an Int field
```

In Scala we usually implement product types via case classes because they are naturally immutable structures and they
come with lots of useful methods built in like copy. Also, they give us the often underrated ability to name our members
in an expressive way.

```scala
case class Address(street: String, doorNumber: Int)
```

# Why do we need Algebraic Data Types?

Well, the whole point of functional programming is to create programs utilizing pure functions (at least in theory). If
you recall from your high school math class, a function is just a relationship between sets. So being able to define and
manipulate our data types as sets actually goes a really long way to achieve this, because it allows us to design our
programs utilizing functions in the mathematical sense.

Join me next time to see how these Data Types can be used alongside Domain Driven Development to model our problems in a
functional way, allowing us to create code that is easy to think about and maybe, just maybe, can be read and verified
by our domain experts.
