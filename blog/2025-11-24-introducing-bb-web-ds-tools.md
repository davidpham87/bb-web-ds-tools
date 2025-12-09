Title: Introducing BB Web DS Tools: Because Servers Are The Worst
Date: 2025-11-24
Tags: clojure, data-science
---

_By The "Why Did We Build This" Team_

Welcome to **BB Web DS Tools**, a data science suite that runs entirely in your
browser. And I know what you’re thinking: "Wait, isn't the browser just for
looking at cat pictures and arguing with strangers on X?" Yes. But now, it’s
also for crunching data until your laptop fan sounds like a 747 preparing for
takeoff.

## The Problem: "The Cloud" (aka Someone Else's Computer)

Let’s be honest: setting up a local data science environment is a nightmare. It
is a fresh hell that involves Docker containers, Python version conflicts, and
praying to the gods of the `PATH` variable. It is the digital equivalent of
trying to assemble IKEA furniture in the dark while someone screams random
numbers at you.

And the alternative? The Cloud. The Cloud is great, provided you enjoy paying
Amazon Jeff Bezos rent money every time you want to calculate a mean.

## The Solution: Just... The Browser?

We thought, "What if we just didn't?" What if we took all the heavy lifting—
Python, R, LLMs—and shoved them into the browser using WebAssembly?

Is it crazy? Yes. Does it work? Surprisingly, yes. Will it eat your battery
life? Look, freedom isn't free, and neither is the electricity required to run a
Large Language Model on a MacBook Air.

## What is this thing?

It's a dashboard built with **ClojureScript**, because we like our parentheses
like we like our government: nested, confusing, and surprisingly powerful if you
know where to look.

We use **Shadow-CLJS** and **Re-frame**, which are fancy ways of saying "it
updates fast."

## Key "Features" (We Think)

- **No Install:** You open the URL. That’s it. You have succeeded.
- **Privacy:** Your data never leaves your computer. It stays right there in the
  browser memory. This means even _we_ can't see your embarrassing CSV files
  named `final_final_v2_ACTUALLY_FINAL.csv`.
- **Polyglot:** We have Python. We have R. We have Clojure. It’s like the United
  Nations of programming languages, but with less arguing and more stack traces.

So go ahead. Give it a spin. It’s free, it’s local, and it definitely won’t mine
crypto in the background. (It won't. We checked. We think.)
