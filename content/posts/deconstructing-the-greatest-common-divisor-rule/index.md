---
title: Deconstructing the Greatest Common Divisor Rule
description: Why the Euclidean Algorithm works, a step-by-step proof of why the remainder r is always divisible by any divisor of a and b, and how that single fact makes GCD computation extremely efficient.
date: 2025-12-09
draft: false
slug: /pensieve/deconstructing-the-greatest-common-divisor-rule
tags:
  - DSA
  - Algorithms
  - Mathematics
  - Number-Theory
  - Python
---

Finding the GCD of two numbers naively means trying every integer up to min(a, b), fine for small inputs, painful at scale. The Euclidean Algorithm solves it in a fraction of the steps, but only because of one non-obvious fact: if a and b are both divisible by d, then the remainder r of a divided by b must also be divisible by d. This post proves that fact from first principles using the Division Algorithm, then walks through the termination condition and the two special cases involving zero, including why GCD(0, 0) is formally defined as 0 rather than left undefined.

[Read the full post on Medium &rarr;](https://medium.com/@obolo.emmanuel31052000/deconstructing-the-greatest-common-divisor-rule-0a47a09ecc95)
