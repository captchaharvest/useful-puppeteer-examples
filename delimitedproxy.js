// Declare the proxyValue:
proxyValue = 'HOST:PORT:USERNAME:PASSWORD';

// Split the proxy into an array using ':' a delimiter:
var proxyDelimited = proxyValue.split(':');
console.log(proxyDelimited);

// Console should return:
//[
//    'HOST',
//    'PORT',
//    'USERNAME',
//    'PASSWORD'
//]

// Verify a set of proxies is properly being split:
if (proxyValue.length == 4) {
    console.log('Proxy has been split properly!');
} else {
    console.log('Proxy syntax is incorrect. Terminating task...');
    process.exit(1);
}