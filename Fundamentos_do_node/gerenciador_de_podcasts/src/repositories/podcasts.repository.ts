import fs from "fs"
import path from "path"
import { Podcast } from "../models/podcast.model";
import { ContentLanguage } from "../utils/contentLanguage";

const podcastsPath = path.join(__dirname, "../data/episodios.json");

export const repositoryPodCast = async (podcats_name?: string): Promise<Podcast[]> => {
    const rowData: string = await fs.readFileSync(podcastsPath, ContentLanguage.UTF_8)
    let jsonfile = JSON.parse(rowData);
    if (podcats_name){
        jsonfile = jsonfile.filter((podcast: Podcast) => podcast.podcats_name == podcats_name)
    }
    return jsonfile;
}