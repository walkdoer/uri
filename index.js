import Uri from './src/uri';

function $(sel) {
    return document.querySelector(sel);
}


let u = new Uri();



//生成uri

$('.current').innerText = u.str();


var up = new Uri("http://example.com/user?name=jams&age=10");
//Add Params
up.params({
    id: 12321,
    name: "alex"
});

$('.addParams').innerText = up.str();


let u1 = new Uri();

u1.path("a/b");
$('.path1').innerText = u1.str();


u1.path("/c/d");

$('.path2').innerText = u1.str();


let u2 = new Uri();
u2.path("../a");
u2.str();

$('.path3').innerText = u2.str();


let u3 = new Uri("http://example.com/api");
u3.path("/user").params({id: 1323, name: "alex"});
u3.str();
$('.params_path').innerText = u3.str();
console.log(u3);


//Config global params
Uri.config({
    params: {
        "bar": "te",
        "foo": "st"
    }
});
var u4 = new Uri("http://example.com");
u4.str();
$('.params_global').innerText = u4.str();



