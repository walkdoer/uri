# uri

Simple uri manipulation tool



### Uri(String uri)

创建一个Uri

```
var u = new Uri("http://example.com:5000/user?name=alex&age=10");

u.protocol // http
u.host // example.com
u.pathname // /user
u.query // name=alex&age=10
u.port // 5000
```

如果不传入uri参数，则以当前的访问路径为准，例如我在浏览器中的访问路径为 `https://google.com/search`

```
var u = new Uri();
u.str(); // https://google.com/search
```

## Methods 方法

### setParams(Object obj)

设置参数

```
var u = new Uri("http://example.com?name=alex");
u.setParams({'name': 'mary'}).str() //http://example.com?name=mary
u.setParams({ 'email': 'test@example.com', 'sex': 'female' }).str(); // http://example.com?name=mary&email=test@example.com&sex=female
```

### removeParams(Array keys)

移除参数

```
let u = new Uri("http://example.com/api?a=1&b=2&c=3&d=4");
u.removeParams(['a', 'c']).str(); //http://example.com/api?b=2&d=4
```


### path(String pathname)

修改path , 使用绝对路径和相对路径都可以

```
var u = new Uri("http://example.com/index");
u.path('/new/path').str(); // http://example.com/new/path
u.path('../test').str();   // http://example.com/new/test

```

### str()

生成uri字符串


### Uri.config(Object options) `static`

全局配置

通过配置`params`, 可以让每个连接都带上这些配置好的全局参数

```
Uri.config({
    params: {
        "company": "ex"
    }
});

var u = new Uri("http://example.com");
u.str(); //http://example.com?company=ex;

```


## Release
- 0.1.6  `2016-01-07`  Polyfill Object.assign
- 0.1.5  `2016-01-06` remove extend dependency and update document.
- 0.1.4  `2016-01-05` 1. change api `params` to `setParams` 2. params use to get query params;
- 0.1.3  `2016-01-04`  bugfix module problem
- 0.1.2  `2016-01-04`  bugfix import problem
- 0.1.1  `2016-01-04`  umd
- 0.1.0  `2016-01-04`  initial version