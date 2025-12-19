goog.provide('bb_web_ds_tools.utils.io');
/**
 * Triggers a file download in the browser.
 * 
 *   Args:
 *  content (string): The file content.
 *  filename (string): The filename to save as.
 *  mime-type (string): The MIME type of the file.
 */
bb_web_ds_tools.utils.io.download_file = (function bb_web_ds_tools$utils$io$download_file(content,filename,mime_type){
var blob = (new Blob([content],({"type": mime_type})));
var url = URL.createObjectURL(blob);
var a = document.createElement("a");
(a.href = url);

(a.download = filename);

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

return URL.revokeObjectURL(url);
});

//# sourceMappingURL=bb_web_ds_tools.utils.io.js.map
