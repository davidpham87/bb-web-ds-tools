(ns bb-web-ds-tools.views.r-repl
  (:require [reagent.core :as r]
            ["@xterm/xterm" :refer [Terminal]]
            ["@xterm/addon-fit" :refer [FitAddon]]))

(defn- pop-last-char [s]
  (if (> (count s) 0)
    (subs s 0 (dec (count s)))
    s))

(defn start-read-loop [webr term]
  (letfn [(loop-fn []
            (-> (.read webr)
                (.then (fn [msg]
                         (let [type (.-type msg)
                               data (.-data msg)]
                           (cond
                             (= type "stdout") (.write term (str data "\r\n"))
                             (= type "stderr") (.write term (str "\u001b[31m" data "\u001b[0m\r\n"))
                             (= type "closed") nil
                             :else nil)
                           (when (not= type "closed")
                             (loop-fn)))))
                (.catch #(js/console.error "WebR Read Error:" %))))]
    (loop-fn)))

(defn r-repl []
  (let [container-ref (r/atom nil)
        term-ref (r/atom nil)
        webr-ref (r/atom nil)
        input-buffer (r/atom "")
        history (r/atom [])
        history-index (r/atom -1)
        prompt "> "
        retry-timer (r/atom nil)]
    (r/create-class
      {:component-did-mount
       (fn []
         (let [init-fn (fn init-fn []
                         (if (and @container-ref (exists? js/WebR))
                           (let [term (new Terminal (clj->js {:cursorBlink true
                                                              :convertEol true
                                                              :fontFamily "Menlo, Monaco, 'Courier New', monospace"
                                                              :fontSize 14
                                                              :theme {:background "#111827"
                                                                      :foreground "#e5e7eb"}}))
                                 fit-addon (new FitAddon)
                                 webr (new js/WebR (clj->js {}))]

                             (.loadAddon term fit-addon)
                             (.open term @container-ref)
                             (.fit fit-addon)

                             (reset! term-ref term)
                             (reset! webr-ref webr)

                             (js/window.addEventListener "resize" #(.fit fit-addon))

                             (.write term "Loading WebR (R for WebAssembly)... Please wait.\r\n")

                             (-> (.init webr)
                                 (.then (fn []
                                          (start-read-loop webr term)
                                          (.write term "\r\nWebR loaded successfully!\r\n")
                                          (.write term prompt)

                                          (.onData term (fn [data]
                                                          (let [code (.charCodeAt data 0)]
                                                            (cond
                                                              (= code 13)
                                                              (let [cmd @input-buffer]
                                                                (.write term "\r\n")
                                                                (when-not (empty? cmd)
                                                                  (swap! history conj cmd)
                                                                  (reset! history-index -1))
                                                                (reset! input-buffer "")

                                                                (if (empty? cmd)
                                                                  (.write term prompt)
                                                                  (-> (.eval webr cmd)
                                                                      (.then (fn [_]
                                                                               (.write term prompt)))
                                                                      (.catch (fn [err]
                                                                                (.write term (str "\u001b[31mError: " err "\u001b[0m\r\n" prompt)))))))

                                                              (= code 127)
                                                              (when (> (count @input-buffer) 0)
                                                                (.write term "\b \b")
                                                                (swap! input-buffer pop-last-char))

                                                              :else
                                                              (when (>= code 32)
                                                                (.write term data)
                                                                (swap! input-buffer str data))))))))
                                 (.catch (fn [e]
                                           (.write term (str "\u001b[31mFailed to load WebR: " e "\u001b[0m\r\n"))))))
                           (reset! retry-timer (js/setTimeout init-fn 100))))]
           (init-fn)))

       :component-will-unmount
       (fn []
         (when @retry-timer (js/clearTimeout @retry-timer))
         (when @term-ref (.dispose @term-ref)))

       :reagent-render
       (fn []
         [:div.flex.flex-col.h-full.w-full
          [:div.flex-grow.bg-gray-900.rounded.overflow-hidden.p-2
           {:ref #(reset! container-ref %)
            :style {:height "100%" :width "100%"}}]])})))
