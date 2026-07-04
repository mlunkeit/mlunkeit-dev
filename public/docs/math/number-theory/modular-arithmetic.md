# Modular Arithmetic

---

*When we work with numbers in real life, they can become infinitely large. However, this is practically useless
if we want to represent integers as words the machine can understand. We only have a specified and very limited
amount of bits in a word. Therefore integers can not grow until infinity.*

Let's say we can represent $n$ individual numbers from $0$ to $n-1$. Then we are in the so called field $\Z/n\Z$.

As an example we all use in our every day live, we have the clock, where $n=12$. If we add an amount of hours to the current time, let's say we want to add 11 + 3 hours, we don't say it's 14 o'clock, instead we calculate $14 \mod 12 = 2$.

Therefore $14 \equiv 2\text{ (mod }12)$ $ $.

## Formal Definition
To derive mathematical proofs from there, we will need a more formal mathematical definition.

Let $a, b\in\Z, n\in\N^+$. We call a congruent to b $(\text{mod }n)$, formally written as $a \equiv b$, if $a-b$ is divisable by $n$.

$$
  a\equiv b \text{ (mod }n)\Leftrightarrow n\ |\ (a-b)
$$

## Derived Theorems
We can derive some trivial theorems from this definition, which will help us later.

$$
  \begin{split}
  (i)\quad&\forall k\in\Z,m<n\quad kn + m \equiv m\pmod n\\
  (ii)\quad&a_1\equiv a_2\pmod n\land b_1\equiv b_2\pmod n \Rightarrow a_1+b_1\equiv a_2+b_2\pmod n\\
  (iii)\quad&a_1\equiv a_2\pmod n\land b_1\equiv b_2\pmod n\Rightarrow a_1\cdot b_1\equiv a_2\cdot b_2\pmod n
  \end{split}
$$
