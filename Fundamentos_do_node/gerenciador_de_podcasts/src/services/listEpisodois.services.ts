import { FilterPodcastModel } from "../models/filterPodcast";
import { repositoryPodCast } from "../repositories/podcasts.repository";
import { HttpStatusCode } from "../utils/statusCode";

export const serviceListEpisodios = async (): Promise<FilterPodcastModel> => {
    let response: FilterPodcastModel = {
            statusCode: 0,
            body: []
        }
    const data = await repositoryPodCast();
     response.statusCode = data.length != 0? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT ;
        response.body = data??[];
    return response;
}