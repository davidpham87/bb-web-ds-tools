# Automation: Because Typing is for Peasants

*Date: 2025-11-25*

*By The "My Fingers Hurt" Team*

Welcome back! Today we are talking about automation. Specifically, why you are
still typing code like a medieval monk transcribing the Bible by candlelight.
It is 2025! We have self-driving cars (mostly), we have robots that can do
backflips, and yet you are manually writing SQL queries? Stop it. Stop it right
now.

## The Horror of Manual "Coding"

Look at this. Just look at it. This is what you do when you try to write a query
manually. It is disgusting.

```clojure
;; The "I hate myself" method
(def query
  {:select [:*]
   :from [:users]
   :where [:and
           [:= :active true]
           [:> :age 18]
           [:like :name "%Smith%"]]})
```

It’s tedious. It’s prone to errors. You miss one bracket and the whole thing
explodes like a glitter bomb in a library.

Now, look at what our UI does. You click a few buttons—"Select", "From",
"Where"—and the machine spits this out perfectly, every time. It’s like having a
very smart, very quiet assistant who doesn't judge your variable naming
conventions or your lack of unit tests.

## Datasets: Because "CSV" Stands for "Can't Stand Verification"

And then there’s data. Oh, data. You get a CSV file. It has dates in three
different formats. The "Amount" column contains the string "Five Dollars". It is
a garbage fire of entropy.

In the old days (yesterday), you would write a parser. You would cry. You would
write regex. You would cry more.

Now? You drag the file into the **Datasets** view.

Let's say you have a list of 'Penguin Sizes'.
*   **Step 1:** Drop file.
*   **Step 2:** The UI says, "Ah, 'Flipper Length'. That is an Integer. 'Sex'?
    That is a Keyword."
*   **Step 3:** It generates the `malli` schema automatically.

```clojure
[:map
 [:species :string]
 [:island :string]
 [:bill_length_mm :double]
 [:bill_depth_mm :double]
 [:flipper_length_mm :int]
 [:body_mass_g :int]
 [:sex :keyword]]
```

It infers the schema. It detects the types. It generates the parsing code. It
practically offers to pick up your dry cleaning.

## The "Code" Tab

"But I want to see the code!" I hear you whine. "I need control!"

Fine. Go to the "Code" tab. It’s all there. The UI generated it for you. You can
copy it. You can paste it. You can claim you wrote it. We won't tell anyone. We
don't care. We just want you to be happy and stop complaining about syntax
errors.

So please, for the love of all that is holy, use the automation. Save your
keystrokes for something that matters. Like arguing with strangers on the
internet about which Batman movie was the "gritty" one.
