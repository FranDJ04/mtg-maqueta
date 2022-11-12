import { httpGet } from "@fullconectados/utils/webclient";

export const comunaService = {
    find,
};

const host = 'prm/Comunas';

async function find(dato:string) {
    return httpGet(host, {mode:11,data:{nombre:dato}})
}