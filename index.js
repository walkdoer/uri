import Uri from './src/uri';

function $(sel) {
    return document.querySelector(sel);
}

let u = new Uri();



//生成uri

$('.current').innerText = u.str();


//Add Params
u.params({
    id: 12321,
    name: "alex"
});

$('.addParams').innerText = u.str();


