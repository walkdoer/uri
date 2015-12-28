# uri

simple uri manipulate function


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

