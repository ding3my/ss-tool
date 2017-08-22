var exceptions=
[
    "0.0.0.0"
    ,"localhost"
    ,"127.0.0.1"
]; 
function FindProxyForURL(url, host) {
    for (i = 0; i < exceptions.length; i++) {
        if (shExpMatch(host, exceptions[i])){
            return "DIRECT";}}
        return "SOCKS5 127.0.0.1:1080";}
