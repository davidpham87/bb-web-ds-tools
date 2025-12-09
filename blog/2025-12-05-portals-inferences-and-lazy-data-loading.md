Title: Portals, Inferences, and Lazy Data Loading: A Love Story Date: 2025-12-05
Tags: clojure, data-science

---

_By The "We're Still Apologizing For The Parentheses" Team_

Welcome back to the "Dashboard of Mild Confusion," or as we legally have to call
it, **BB Web DS Tools**.

If you've been following our previous posts—and let's be honest, you haven't,
you have a life—you know we built a data science environment that runs entirely
in your browser. Why? Because we hate servers, and we assume you hate installing
things. It's a symbiotic relationship built on shared trauma.

Today, I want to talk about three new features that we added, not because you
asked for them, but because we got bored and started clicking things.

## The Portal: Because `console.log` is for Cavemen

Let’s talk about debugging. For years, the gold standard of inspecting your data
has been `console.log`. It’s the programming equivalent of shouting "IS THIS
ANYTHING?" into a dark room and waiting for an echo.

But it’s 2025. We have self-driving cars (that occasionally crash into fire
trucks), yet we’re still looking at text output like we’re decoding the Enigma
machine.

Enter **The Portal**.

We’ve integrated `djblue/portal` everywhere. And I mean everywhere. It’s in the
Code view. It’s in the Datasets view. It’s probably behind you right now.

Portal is a UI for your data. Instead of a sad string of text, you get a
navigable, clickable, explorable interface. You can drill down into maps,
visualize vectors, and actually _see_ the structure of your EDN. It’s like
having x-ray vision, but only for JSON objects, which is arguably the worst
superpower imaginable.

## Malli Inference: It Knows You Better Than You Know Yourself

Data validation is important. We all know this. We also all know that writing
schemas is about as fun as doing your taxes in a language you don’t speak.

So we thought: "What if the computer just... guessed?"

We’ve updated our Malli integration to be aggressively judgmental about your
data. It doesn't just look at a string and say, "Yep, that's text." No, no. It
counts.

If you have a column of strings with 10 or fewer distinct values? Boom.
**Enum**. You didn't ask for an Enum, but you're getting one. The system looks
at your data and says, "I see what you're doing here, and frankly, your
vocabulary is limited."

It also checks your numbers. It finds the `min` and `max` values and embeds them
right into the schema. It’s like having a very specific, very pedantic
accountant who audits your data as you type it. "Oh, you thought this was just
an integer? No, this is an integer between 5 and 500. Do better."

## Vega Datasets: Freeloading for Science

Finally, let’s talk about data.

Usually, when you want to test a dashboard, you have to go find a CSV. You have
to open a new tab, search for "sample csv," avoid the sketchy websites, download
a file named `data (1).csv`, and drag it in. It’s exhausting. It’s _too much
work_.

So we stole—sorry, "borrowed"—the entire library of **Vega Datasets**.

We use `jsdelivr` to fetch the list of available datasets directly from the Vega
repository. You want `cars.json`? We got it. `weather.csv`? Click a button.
`airports.csv`? Sure, why not.

It’s basically a buffet of data. You don’t have to cook, you don’t have to
clean, you just show up and consume. And isn't that the American Dream?

## Conclusion

So there you have it. You can now inspect your data with a fancy UI, have an AI
judge your schema choices, and load datasets without ever leaving the tab.

You're welcome. Now please, go outside. The browser will still be here when you
get back.
