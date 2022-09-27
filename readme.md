## script

```
  test, //执行测试
  prettier , // 代码格式化
  build,     // 清除dist并打包至dist文件夹
  build:clean, // 清除dist文件夹
  build:pro,   // 打包至dist文件夹
  build:dev,   // 打包至example/dist文件夹并启动沙盒服务
  doc,         // 打包dev后执行生成jsdoc文档并打开
```

## 目录结构

```
.
├── babel.config.js
├── dist    // 输出文件
│   ├── index.es.js   // es
│   └── index.js      // umd
├── example           // dev
│   ├── dist
│   │   ├── index.es.js
│   │   ├── index.es.js.map
│   │   ├── index.js
│   │   └── index.js.map
│   ├── index.html
│   ├── script.js
│   └── style
│       └── index.css
├── out               // doc-out
│   ├── fonts
│   ├── global.html
│   ├── index.es.js.html
│   ├── index.html
│   ├── scripts
│   └── styles
├── package-lock.json
├── package.json
├── readme.md
├── rollup.config.dev.js
├── rollup.config.pro.js
├── server.js        // open-doc
├── src              // code
│   └── index.js
└── test             // test
    └── index.test.js
```

## wrokflow

`CI`

> 1.  master push
> 2.  pull request to master

`CD`

> publish
