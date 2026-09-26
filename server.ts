import { createServer } from "node:http";

createServer(function (request, response) {
    if (resquest.url === '/api/health') {
        response.writeHead(
            200,
            {'content-type': 'application/json' }
        );
        response.end(JSON.stringfy({status: "ok"}));
        return;

    }

    responseHead(
        404,
        {"content-type": "application/json"}
    );
    response.end(JSON.stringfy({message: 'Recurso não encontrado.'}));
}).listen(3000);

