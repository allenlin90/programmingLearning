# Offline web app
Intro - Date: 2021/09/04

## Offline HTML
1. This technology allows offline access, accelerate page rendering, and reduce server workload.
2. To enable the feature, we can provide a manifest file and add `manifest` attribute in `html` tag in a HTML file. 
  ```html
  <!DOCTYPE HTML>
  <html manifest="cache.manifest">
  </html>
  ```
2. A manifest file has 3 main parts, `CACHE`, `NETWORK`, and `FALLBACK`.
   1. `CACHE` provides the list of resources that should be kept offline. Note that the manifest file has been included, so we don't need to list it.
   2. Resource listed in `NETWORK` can only be accessed when connection is available. When the same resource is listed in both `CACHE` and `NETWORK`, it will be cached, as `CACHE` has higher priority than `NETWORK`.
   3. `FALLBACK` indicates when a resource can't be imported correctly, it can access the other alternative.

## Service Workers
1. Connection requires SSL and HTTPS
2. Servicer workers is 1 type of web worker and can't manipulate DOM directly.
3. In browser, we can open developer console > Application > Service Workers
4. Note that service workers has a different execution environment to the main Javascript, so using `console.log` to print the messages with service worker can be check in "inspect".
5. In addition, we can check "Show all message" in the main console to list all the messages from different API.
6. Similar to other web workers, service workers connect to the main console by `postMessage` API.

<img src="https://camo.githubusercontent.com/acf64a5d2bd63c8acde5d069d54564f902548dc71024a6ed3973950cd088bcba/68747470733a2f2f63646e2e7261776769742e636f6d2f64656c617075656e74652f736572766963652d776f726b6572732d3130312f6d61737465722f73773130312e706e67">

[Service workers 101 - https://github.com/delapuente/service-workers-101](https://github.com/delapuente/service-workers-101)

## Reference
1. [Service worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
2. [Service workers: An introduction](https://developers.google.com/web/fundamentals/primers/service-workers)
3. [Service workers 101](https://github.com/delapuente/service-workers-101)