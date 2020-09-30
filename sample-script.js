/// CODE, USING INBUILT CALLBACK QUEUE. FOR COUNTDOWN

var nu = 10;

// var a = setTimeout((nu, cb) => {
//     document.getElementById('cnt').innerHTML = nu;
//     cb(nu--);
//     var b = a(nu, setTimeout((nu,cb) => {
//     document.getElementById('cnt').innerHTML = nu;
//     cb(nu--);
//     var c = b(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;
//         cb(nu--);
//         var d = c(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;
//         cb(nu--);
//         var e = d(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;    
//         cb(nu--)
//         var f = e(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;   
//         cb(nu--);
//         var g = f(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;    
//         cb(nu--);
//         var h = g(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;
//         cb(nu--);
//         var i = h(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;    
//         cb(nu--);
//         var j = i(nu,setTimeout(() => {
//         document.getElementById('cnt').innerHTML = nu;
//         cb(nu--);
//         }, 1000))
//         }, 1000))
//         }, 1000))
//         }, 1000))
//         }, 1000))
//         }, 1000))
//         }, 1000))
//     }, 1000))
//     }, 1000))
// }, 1000);

// j();

// var a = function(nu, cb){
//     setTimeout((nu) => {
//     document.getElementById('cnt').innerHTML = nu;
//     cb(nu--);
// },1000)}

setTimeout(() => {
    document.getElementById("cnt").style.color = "blue";
    document.getElementById('cnt').innerHTML = (nu);
}, 1000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "red";
    document.getElementById('cnt').innerHTML = (nu--);
}, 1000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "gray";
    document.getElementById('cnt').innerHTML = (nu--);
}, 2000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "green";
    document.getElementById('cnt').innerHTML = (nu--);
}, 3000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "blue";
    document.getElementById('cnt').innerHTML = (nu--);
}, 4000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "orange";
    document.getElementById('cnt').innerHTML = (nu--);
}, 5000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "brown";
    document.getElementById('cnt').innerHTML = (nu--);
}, 6000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "purple";
    document.getElementById('cnt').innerHTML = (nu--);
}, 7000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "maroon";
    document.getElementById('cnt').innerHTML = (nu--);
}, 8000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "green";
    document.getElementById('cnt').innerHTML = (nu--);
}, 9000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "black";
    document.getElementById('cnt').innerHTML = (nu--);
}, 10000);

setTimeout(() => {
    document.getElementById("cnt").style.color = "crimson";
    document.getElementById("cnt").style.border = "thick solid gold";
    document.getElementById("cnt").style.display = "inline-block";
    document.getElementById('cnt').innerHTML = "HAPPY GANDHI JAYANTI";
}, 11000);