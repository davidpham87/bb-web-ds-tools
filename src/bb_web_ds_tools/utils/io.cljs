(ns bb-web-ds-tools.utils.io)

(defn download-file
  "Triggers a file download in the browser.

  Args:
    content (string): The file content.
    filename (string): The filename to save as.
    mime-type (string): The MIME type of the file."
  [content filename mime-type]
  (let [blob (js/Blob. #js [content] #js {:type mime-type})
        url (js/URL.createObjectURL blob)
        a (js/document.createElement "a")]
    (set! (.-href a) url)
    (set! (.-download a) filename)
    (js/document.body.appendChild a)
    (.click a)
    (js/document.body.removeChild a)
    (js/URL.revokeObjectURL url)))
