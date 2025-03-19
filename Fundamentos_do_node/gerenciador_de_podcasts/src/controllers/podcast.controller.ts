import { IncomingMessage, ServerResponse } from "http"
import {serviceListEpisodios} from "../services/listEpisodois.services"
import { serviceFilterEpisodios } from "../services/filterEps.service";
import { ContentType } from "../utils/contentType";

export const getistEpsidios = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodios();
    res.writeHead(content.statusCode, {
        "content-type": ContentType.JSON
    });
    res.end(JSON.stringify(content.body))
}

export const getFilterEpsidios = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content = await serviceFilterEpisodios(req.url??"");
    res.writeHead(content.statusCode, {"content-type":ContentType.JSON});
    res.end(JSON.stringify(content.body))
}