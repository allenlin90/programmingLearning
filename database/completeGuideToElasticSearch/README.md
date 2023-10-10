# Introduction

## Overview of the Elastic Stack

1. ElasticSearch
2. Kibana
3. LogStash
4. Beats
5. X-Pack

### Kibana

1. An analytics and visualization platform
2. Dashboard and UI for ElasticSearch
3. Kibana can manage parts of ElasticSearch and LogStash

### LogStash

1. A data processing pipeline that proceed logs for applications.
2. By combining different plugins, `input`, `filter`, and `output`, we can manipulate data.

```
input {
  file {
    path => "/path/to/apache_access.log"
  }
}

filter {
  if [request] in ["/robots.txt", "/favicon.ico] {
    drop { }
  }
}

output {
  file {
    path => "%{type}_%{+yyyy_MM_dd}.log"
  }
}
```
