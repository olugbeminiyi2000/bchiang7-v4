---
title: Understanding Binary Search
description: Why binary search needs an ordered array, what that ordering costs you at insertion time, and how the algorithm actually works, with a Python implementation.
date: 2026-05-26
draft: false
slug: /pensieve/understanding-binary-search
tags:
  - DSA
  - Searching-Algorithms
  - Binary-Search
  - Python
---

Linear search works but it has a ceiling — in the worst case you check every single element. Binary search breaks that ceiling, but it comes with a price: your array must always be ordered. This post explores what that ordering costs you at insertion time (spoiler: it is N + 2 steps in most cases), then walks through exactly how binary search exploits that order to cut the search space in half with every single step — including a Python implementation.

[Read the full post on Medium &rarr;](https://medium.com/@obolo.emmanuel31052000/understanding-binary-search-6c69ee5a5c63)
