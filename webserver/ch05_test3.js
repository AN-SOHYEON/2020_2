var http = require('http');

// 웹서버 객체
var server = http.createServer();

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

// 서버 종료 이벤트 처리
server.on('close', function() {
	console.log('서버가 종료됩니다.');
});

//****콜백함수 : 함수가 실행되고 있을 때 호출되어 상태 정보를 전달하거나 결과값을 처리함,
//              혹은 어떤 함수의 반환값으로 쓰여 어떤 함수의 추가적인 작업을 수행한다.