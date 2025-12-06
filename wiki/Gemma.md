# Gemma View

The Gemma view provides an interface to interact with the Gemma Large Language Model (LLM) running locally in the browser via MediaPipe.

## Features

- **Local Inference**: Runs entirely in your browser using WebGPU.
- **Chat Interface**: Simple chat UI to prompt the model.

## Usage

1.  Navigate to the **Gemma** view.
2.  If the model is not loaded, follow the on-screen instructions to load the model weights (this may require a significant download).
3.  Type your prompt in the input box.
4.  Press **Enter** to send.

## Example

**Prompt:**
> Write a Clojure function to calculate the average of a list of numbers.

**Response:**
(The model will generate a response similar to:)

```clojure
(defn average [numbers]
  (/ (apply + numbers) (count numbers)))
```
