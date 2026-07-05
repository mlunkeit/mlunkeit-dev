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

**Proof**

To $i$: $kn+m\equiv m\pmod n\Leftrightarrow n\ |\ (kn+m-m) \Leftrightarrow n\ |\ kn\Leftrightarrow \text{true statement}$

To $ii$: $a_1\equiv a_2\pmod n\Leftrightarrow n\ |\ (a_1-a_2)\quad b_1\equiv b_2\pmod n\Leftrightarrow n\ |\ (b_1-b_2)$

Therefore $a_1+b_1\equiv a_2+b_2\pmod n\Leftrightarrow n\ |\ (a_1+b_1-(a_2+b_2))\Leftrightarrow n\ |\ (a_1-a_2+b_1-b_2)$
and because of our condition this statement is true. $ $

To $iii$: Let $a_1=a_{1,k}n+a_{1,m},\ a_2=a_{2,k}n+a_{2,m},\ b_1=b_{1,k}n+b_{1,m},\ b_2=b_{2,k}n+b_{2,m}$ such that $a_{1,m},a_{2,m},b_{1,m},b_{2,m}<n$.

We then know because of $(i)$ that $a_{1,m}=a_{2,m}$ and $b_{1,m}=b_{2,m}$. Therefore we will just write $a_m$ and $b_m$.

$$
\begin{split}
a_1\cdot b_1&\equiv a_2\cdot b_2\pmod n\\
\Leftrightarrow\ & n\ |\ (a_1b_1-a_2b_2)\\
\Leftrightarrow\ & n\ |\ ((a_{1,k}n+a_m)(b_{1,k}n+b_m)-(a_{2,k}n+a_m)(b_{2,k}n+b_m))\\
\Leftrightarrow\ & n\ |\ (a_{1,k}b_{1,k}n^2+a_{1,k}b_mn+a_mb_{1,k}n+a_mb_m-a_{2,k}b_{2,k}n^2-a_{2,k}b_mn-a_mb_{2,k}n-a_mb_m)\\
\Leftrightarrow\ & n\ |\ (n(a_{1,k}b_{1,k}n+a_{1,k}b_m+a_mb_{1,k}-a_{2,k}b_{2,k}n-a_{2,k}b_m-a_mb_{2,k}))\\
\Leftrightarrow\ & \text{true statement}
\end{split}
$$
