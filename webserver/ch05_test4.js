/* 앞의 test3은 request를 이용하여 서버에서 웹페이지에 응답을 보냄을 표시했지만 
    test4에서는 createServer에 코드를 작성하여 서버가 클라이언트의 요청에 응답함을 표시한다.
*/

var http = require('http');

// 웹서버 객체
var server = http.createServer(function(req, res){
	console.log('클라이언트 요청이 들어왔습니다.');
	
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("  <head>");
	res.write("    <title>응답 페이지</title>");
	res.write("  </head>");
	res.write("  <body>");
	res.write("    <h1> 응답 응답 응답 응답 응답 </h1>");
	res.write("  </body>");
	res.write("</html>");
	res.end();
});

// 웹서버를 시작하여 3000번 포트에서 대기
var port = 3000;
server.listen(port, function() {
	console.log('웹서버가 시작되었습니다. : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
	console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});

// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
   console.log('클라이언트의 요청이 들어왔습니다.');
   console.dir(req);
});

// 서버 종료 이벤트 처리
server.on('close', function() {
	console.log('서버가 종료됩니다.');
});

