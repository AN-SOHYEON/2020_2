//간단한 웹 서버 만들기 1
var http = require('http');

//웹 서버 객체를 만듬
var server = http.createServer();

//웹 서버를 시작하여 3000번 포트에서 대기
var port = 3000;
//server.listen(port, function(){
//    console.log('웹 서버가 시작되었습니다. : %d', port);
//});

//웹 서버를 시작하여 내ip와 3000번 포트에서 대기하도록 한다.
//이렇게 ip를 지정하면 지정한 특정 ip에만 서버 생성
var host = '192.168.219.100';
var port = 3000;
server.listen(port, host, '50000', function(){
    console.log('웹 서버가 시작되었습니다.: %s, %d', host, port);
});
