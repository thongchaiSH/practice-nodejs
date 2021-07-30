//file output
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

//logstash
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
