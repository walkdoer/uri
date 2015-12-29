# uri

Simple uri manipulation tool


## Example


### 创建一个uri

```
var u = uri("http://example.com?name=alex&age=10");
```

### 获取参数

```
var u = uri("http://example.com?name=alex&age=10");
u.params(); // {name: "alex", age: 10}
u.params('name')  // "alex"

```

### 修改参数

```
var u = uri("http://example.com?name=alex");
u.params({'name': 'mary'}) //http://example.com?name=alex
 .params({ 'email': 'test@example.com', 'sex': 'female' }); //http://example.com?name=mary&email=test@example.com&sex=female

```

### 获取path

```
var u = uri("http://example.com/index");
u.path(); // /path
```

### 修改path

使用绝对路径和相对路径都可以

```
var u = uri("http://example.com/index");
u.path('/new/path'); // http://example.com/new/path
 .path('../test');   // http://example.com/new/test

```

### 生成路径

```
var u = uri("http://example.com");
u.path('/new/path').params({"name": "alex"});
u.str() //http://example.com/new/path?name=alex
```


### 全局配置

通过配置params, 可以让每个连接都带上这些配置好的全局参数

```
uri.config({
    params: {
        "company": "ex"
    }
});


var u = uri("http://example.com");
u.str(); //http://example.com?company=ex;

```