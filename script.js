//USING CALLBACK FUNCTION

var nu = 10;

setTimeout(function(){
    document.getElementById("cnt").style.color = "blue";
    document.getElementById('cnt').innerText = (nu--);
    setTimeout(function(){
        document.getElementById("cnt").style.color = "red";
        document.getElementById('cnt').innerText = (nu--);
        setTimeout(function(){
            document.getElementById("cnt").style.color = "gray";
            document.getElementById('cnt').innerText = (nu--);
            setTimeout(function(){
                document.getElementById("cnt").style.color = "green";
                document.getElementById('cnt').innerText = (nu--);
                setTimeout(function(){
                    document.getElementById("cnt").style.color = "black";
                    document.getElementById('cnt').innerText = (nu--);
                    setTimeout(function(){
                        document.getElementById("cnt").style.color = "orange";
                        document.getElementById('cnt').innerText = (nu--);
                        setTimeout(function(){
                            document.getElementById("cnt").style.color = "brown";
                            document.getElementById('cnt').innerText = (nu--);
                            setTimeout(function(){
                                document.getElementById("cnt").style.color = "purple";
                                document.getElementById('cnt').innerText = (nu--);
                                setTimeout(function(){
                                    document.getElementById("cnt").style.color = "maroon";
                                    document.getElementById('cnt').innerText = (nu--);
                                    setTimeout(function(){
                                        document.getElementById("cnt").style.color = "green";
                                        document.getElementById('cnt').innerText = (nu--);
                                        setTimeout(function(){
                                            document.getElementById("cnt").style.color = "crimson";
                                            document.getElementById("cnt").style.border = "thick solid gold";
                                            document.getElementById("cnt").style.display = "inline-block";
                                            document.getElementById('cnt').innerHTML = "HAPPY GANDHI JAYANTI";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);