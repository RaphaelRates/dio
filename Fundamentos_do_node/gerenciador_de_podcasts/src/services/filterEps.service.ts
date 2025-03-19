import { FilterPodcastModel } from "../models/filterPodcast";
import { repositoryPodCast } from "../repositories/podcasts.repository";
import { HttpStatusCode } from "../utils/statusCode";

export const serviceFilterEpisodios = async (podcats_name: string): Promise<FilterPodcastModel> => {
    const query = podcats_name.split("?p=")[1]

    let response: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }
    
    const data = await repositoryPodCast(query);
    response.statusCode = data.length != 0? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT ;
    response.body = data??[];

    return  response;
}