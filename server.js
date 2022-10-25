const http = required('http');
const server = http.createServer((req, res) =>{
    console.log('run request....')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Helo word</h3>');
    res.write('<h2>from ERIC </h2>');
    res.end();
})

server.listen(3000, 'localhost', () =>
{
    console.log('Node.js sever is running on port 3000');
})