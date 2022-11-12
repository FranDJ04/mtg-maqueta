import { httpGet, httpPut, httpPost } from "@fullconectados/utils/webclient";

export const contactosService = {
    list,
    get,
    save
}; 

async function list() {
    return httpGet('crm/Contactos', {mode:1})
}

async function save(data:any) {
    if(data.id > 0)
        return httpPut('crm/Contactos', data.id, data, 1);
    else
        return httpPost('crm/Contactos', data, 1);
}

async function get(id:number) {
    return httpGet('crm/Contactos', {mode: 2, data:{id}});
} 

