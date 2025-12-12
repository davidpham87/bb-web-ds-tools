Title: Documentation, R Integration, and Stability
Date: 2025-12-10
Tags: documentation, r, changelog, wiki
Summary: A major update introducing a comprehensive Wiki, improved R runtime integration with dataset synchronization, and significant stability improvements.

Today we are releasing version 0.10.0, a significant update that focuses on documentation, stability, and deepening our integration with the R ecosystem.

## Introducing the Wiki

We have added a comprehensive [Wiki](/wiki/index.html) to the project. This new documentation hub covers every aspect of the application, from the **App DB** structure to detailed guides for **CLI Tools**, **Gemma**, **HoneySQL**, **Malli**, and **Vega-Lite**. Whether you are a user trying to generate data with Malli or a developer looking to understand the dataset synchronization design, the Wiki has you covered.

## R Runtime Integration

The **R Runtime** (powered by WebR) has received a major upgrade. We have implemented bidirectional dataset synchronization between the application's global state and the R environment.

*   **Read**: Access your UI datasets directly in R as a named list `datasets`.
*   **Write**: Create or modify data frames in R, and assign them to `datasets[["My Name"]]` to see them instantly appear in the application's Datasets view.

This seamless integration allows you to leverage the full power of R's statistical packages for data processing while using our modern web UI for visualization and management.

## Refactoring and Stability

Under the hood, we've touched almost every file in the codebase to improve stability and code health. This includes:

*   **Dataset Synchronization**: A robust design for syncing data between the main thread and web workers (SCI, Pyodide, WebR), ensuring consistent state across all runtimes.
*   **Component Cleanup**: We've standardized our component architecture, cleaning up technical debt in `async-buffer`, `editor`, and common UI components.
*   **Testing**: We've expanded our test suite to cover these new integration paths, ensuring that your data stays safe during round-trips.

Check out the full [Changelog](#/changelog) for a detailed list of changes.
