---
title: 'Building My Own MVC Framework from Scratch: A Deep Dive into Web Architecture'
description: What actually happens when a request hits a server? I built a Python MVC framework from scratch to find out; covering routing, controllers, views, models with JSON persistence, raw HTTP parsing, and file uploads.
date: 2025-02-19
draft: false
slug: /pensieve/building-my-own-mvc-framework-from-scratch
tags:
  - Python
  - MVC
  - Web-Architecture
  - Project
---

Django, Flask, and Express abstract away a lot of complexity. I wanted to understand what sits beneath that abstraction, so I built my own MVC framework called V1 from scratch in Python. No web framework dependencies, just raw TCP sockets, a custom HTTP request parser, a router with persistent state via pickle, a model layer with atomic writes and key-value validation, and a view system for rendering responses. This post walks through every component and how they connect.

[Read the full post on Medium &rarr;](https://medium.com/@obolo.emmanuel31052000/building-my-own-mvc-framework-from-scratch-a-deep-dive-into-web-architecture-48b5418e779e)
