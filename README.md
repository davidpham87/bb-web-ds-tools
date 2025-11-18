# bb-web-ds-tools
Some handy data science tools for the pressed DS

Simple clojurescript web app that expose honeysql and metosim/malli to the user while letting them input data using the coding editor.

1. Use shadow-cljs to start
2.use reagent and re-frame ok clojurescript, and use CodeMirror for input data.
3. user should be able to detect a schema from multiple observations (mp/provide) and generate (malli.generator).
4. honeysql should he there for wuick conversion.

5. each tool shouldnlive in a differett app, but the main code should he always modifiable.
