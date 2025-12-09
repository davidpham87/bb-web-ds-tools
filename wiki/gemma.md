# Gemma View

## Why?

Because talking to real humans is exhausting, overrated, and often requires
"pants." Gemma is here to validate your poor coding decisions and generate
hallucinatory facts with absolute confidence, all without leaving your browser
or judging your search history.

The **Gemma View** demonstrates the capability of running Large Language Models
(LLMs) entirely within the browser using WebGPU and the MediaPipe GenAI Tasks
API. It specifically targets the Google Gemma model (e.g., Gemma 2B).

## Features

- **Client-Side Inference**: No server-side processing; the model runs locally
  on your device.
- **WebGPU Acceleration**: Utilizes the GPU for efficient performance.
- **Chat Interface**: A familiar conversational UI for interacting with the
  model.

## Prerequisites

- A browser with WebGPU support (e.g., recent Chrome/Edge).
- A compatible GPU.
- The model weights file (e.g., `gemma-2b-it-gpu-int4.bin`) must be available to
  the application (usually served from the root).

## Step-by-Step Usage

### 1. Load the Model

1.  Navigate to the **Gemma** view.
2.  If the model is not yet loaded, you will see a "Load Model" button or a
    loading indicator.
3.  Click the button to initiate the download and initialization.
    - _Note: This downloads a large file (~1.5GB) and may take some time
      depending on your connection._

### 2. Chatting

1.  Once initialized, the chat input field at the bottom becomes active.
2.  Type a prompt related to data science or coding. For example:
    > "Explain the difference between a list and a vector in Clojure."
3.  Press **Enter**.
4.  The model will stream its response into the chat history window.

### 3. Coding Assistance

You can use Gemma to help write code for other views.

**Example Prompt:**

> "Generate a JSON dataset with 5 rows containing id, score, and category
> fields."

**Expected Output:**

```json
[
  { "id": 1, "score": 85, "category": "A" },
  { "id": 2, "score": 90, "category": "B" },
  { "id": 3, "score": 78, "category": "A" },
  { "id": 4, "score": 92, "category": "C" },
  { "id": 5, "score": 88, "category": "B" }
]
```

You can then copy this output to the **Datasets** view.
