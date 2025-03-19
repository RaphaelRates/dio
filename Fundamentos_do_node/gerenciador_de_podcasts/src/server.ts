import * as http from "http";
import { 
    getFilterEpsidios,
    getistEpsidios
} from "./controllers/podcast.controller"
import { ROUTER } from "./routes/routes";
import { HttpMethod } from "./utils/http.methods";

const server = http.createServer(async (
    request: http.IncomingMessage,
    response: http.ServerResponse
) => {

    const [baseUrl, query] = request.url?.split('?')??["",""];

    if (request.method == HttpMethod.GET && baseUrl == ROUTER.LIST) {
        await getistEpsidios(request,response);
    }
    if (request.method == HttpMethod.GET && baseUrl == ROUTER.EPISODIO) {
        await getFilterEpsidios(request,response);
    }
}
);
const port: number | string = process.env.PORT || 3000

server.listen(port, () => {
    console.log("Servidor em http://localhost:" + port);

})