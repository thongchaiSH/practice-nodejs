# Logstash for log4js
## Install package
```
npm i log4js log4js-logstash-tcp
```
## Configuration
### Log4js logstash
```js
log4js.configure({
  appenders: {
    logstash: {
      type: "log4js-logstash-tcp",
      host: "localhost",
      port: 5044,
      fields: {
        appName: "node-log-stash",
        indexname: "node-service",
      },
    },
    console: { type: "console" },
  },
  categories: {
    default: { appenders: ["logstash", "console"], level: "debug" },
  },
});
```

### Log4js logfile
```js
log4js.configure({
  appenders: {
    access: {
      type: "dateFile",
      filename: "log/access.log",
      pattern: "-yyyy-MM-dd",
    },
    app: {
      type: "file",
      filename: "log/app.log",
      maxLogSize: 10485760,
      numBackups: 3,
    },
    errorFile: { type: "file", filename: "log/errors.log" },
    errors: { type: "logLevelFilter", level: "error", appender: "errorFile" },
  },
  categories: {
    default: { appenders: ["app", "errors"], level: "info" },
    http: { appenders: ["access"], level: "info" },
  },
});
```
### Logstash config
```
input {
  tcp {
    port => 5044
  }  
}

filter {
  json {
    source => "message"
  }
}
output {
  elasticsearch {
    hosts => ["http://elasticsearch:9200"]
    index => "%{indexname}-%{+YYYY.MM.dd}"
  }
}
```

## Example
```js
var log = log4js.getLogger();

log.error("hello hello");
log.debug("hello hello");
```