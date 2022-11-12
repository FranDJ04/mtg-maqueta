import getConfig from 'next/config'
import Swal from 'sweetalert2'
import { DebugLog } from './validate';

const { publicRuntimeConfig } = getConfig()

const apiURL = publicRuntimeConfig.API_URL;
const numeros = '7865904312';
const minuscula = 'qwertyuiopasdfghjklzxcvbnm';
const mayuscula = 'ZXCVBNMASDFGHJKLQWERTYUIOP';

const getAuthToken = () => {
	const auth = FcEncrypted({ id: 1, fecha: new Date() });
	return `Bearer ${auth}`;
}

export const FcEncrypted = (data: any) => {
	const valor = JSON.stringify(data);
	let arreglo: string[] = [];
	let text;
	if (typeof window !== "undefined") {
		text = window.btoa(unescape(encodeURIComponent( valor )));
	}else{
		text = Buffer.from(unescape(encodeURIComponent( valor ))).toString('base64');
	}
	for (let i = 0; i < text.length; i++) {
		let x = text.charAt(i);
		const ch = x.charCodeAt(0);
		if (ch >= 48 && ch <= 57) {                
			arreglo.push(numeros[ch - 48]);
		} else if (ch >= 65 && ch <= 90) { 
			arreglo.push( mayuscula[ch - 65]);
		} else if (ch >= 97 && ch <= 122) {
			arreglo.push( minuscula[ch - 97]);
		} else if (ch === 61) {
			arreglo.push( '@');
		} else {
			arreglo.push( x);
		}  
	}
	return arreglo.join('') + '='; 	
};

export const FcDecrypted = (text: string | null | undefined) => {
	if(text == undefined || text == null) return {};
	try {		
		const valor = text.replace('=', '');
		let arreglo: string[] = [];
		for (let i = 0; i < valor.length; i++) {
			let x = text.charAt(i);
            const ch = x.charCodeAt(0);
            if (ch >= 48 && ch <= 57) {
                arreglo.push( String.fromCharCode(numeros.indexOf(x) + 48) );
            } else if (ch >= 65 && ch <= 90) {
                arreglo.push( String.fromCharCode(mayuscula.indexOf(x) + 65) );
            } else if (ch >= 97 && ch <= 122) {
                arreglo.push( String.fromCharCode(minuscula.indexOf(x) + 97) );
            } else if (ch === 64) {
                arreglo.push( '=' ); 
            } else {
                arreglo.push( x );
            } 
        }
		if (typeof window !== "undefined") {
        	return JSON.parse(decodeURIComponent(escape(window.atob(arreglo.join(''))))); 
		}else{
			return JSON.parse(decodeURIComponent(escape(Buffer.from(arreglo.join(''), 'base64').toString()))); 
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};

export const httpGet = async (url: string, param:any, field: string = "filter") => {
	try {		
		var filter = FcEncrypted(param);
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json', 'Authorization': getAuthToken() }
		};
		DebugLog('httpGet', url, param);
		const query = await fetch(`${apiURL}/${url}?${field}=${filter}`, requestOptions);
		if(query.status < 300){
			const json = await query.json();   
			if(json.statusCode == 200){
				if(typeof json.data === 'string')
					return FcDecrypted(json.data);
				else
					return json.data;
			} else if(json.statusCode > 200 && json.statusCode < 500 ){
				Swal.fire({
					title: json.message,
					text: json.error,
					icon: 'warning',
					confirmButtonText: 'Ok'
				});
				console.log('WARNING FETCH', json, field, param);
				return null;
			} else {
				Swal.fire({
					title: json.Message,
					text: json.Error,
					icon: 'error',
					confirmButtonText: 'Ok'
				});
				console.log('ERROR FETCH', json, field, param);
				return null;
			}
		} else {
			Swal.fire({
				title: 'Error!',
				text: query.statusText,
				icon: 'error',
				confirmButtonText: 'Ok'
			});
			return null;	
		}
	}
	catch (e:any) { 
		console.log('fetch error', e, url);
		Swal.fire({
			title: 'Error!',
			text: e.toString(),
			icon: 'error',
			confirmButtonText: 'Ok'
		});
		return null;
	}
}

export const httpPost = async (url: string, param:any, mode:number = 1) => {
	try { 
		var filter = FcEncrypted(param);
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Authorization': getAuthToken() },
			body: JSON.stringify({ mode:mode, data: filter })
		};
		const query = await fetch(`${apiURL}/${url}`, requestOptions);
		if(query.status < 300){
			const json = await query.json();
			if(json.statusCode == 200){
				if(json.data!=null && json.data!=''){
					return FcDecrypted(json.data);
				}else{
					return true;
				}
			} else {
				console.log('ERROR FETCH', json, param);
				Swal.fire({
					title: json.Message,
					text: json.Error,
					icon: 'error',
					confirmButtonText: 'Ok'
				});
				return null;
			}
		} else {
			Swal.fire({
				title: 'Error!',
				text: query.statusText,
				icon: 'error',
				confirmButtonText: 'Ok'
			});
			return null;	
		}
	}
	catch (e:any) { 
		console.log('fetch error', e, url);
		Swal.fire({
			title: 'Error!',
			text: e.toString(),
			icon: 'error',
			confirmButtonText: 'Ok'
		});
		return null;
	}
}

export const httpPut = async (url: string, id:number, param:any, mode:number = 1) => {
	try { 
		var filter = FcEncrypted(param);
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', 'Authorization': getAuthToken() },
			body: JSON.stringify({ mode:mode, data: filter })
		};
		const query = await fetch(`${apiURL}/${url}/${id}`, requestOptions);
		if(query.status < 300){
			const json = await query.json();   
			if(json.statusCode == 200){
				if(json.data!=null && json.data!=''){
					return FcDecrypted(json.data);
				}else{
					return true;
				}
			} else {
				console.log('ERROR FETCH', json, param);
				Swal.fire({
					title: json.Message,
					text: json.Error,
					icon: 'error',
					confirmButtonText: 'Ok'
				});
				return null;
			}
		} else {
			Swal.fire({
				title: 'Error!',
				text: query.statusText,
				icon: 'error',
				confirmButtonText: 'Ok'
			});
			return null;	
		}
	}
	catch (e:any) { 
		console.log('fetch error', e, url);
		Swal.fire({
			title: 'Error!',
			text: e.toString(),
			icon: 'error',
			confirmButtonText: 'Ok'
		});
		return null;
	}
}
export const httpDelete = async (url: string, id:number) => {
	try { 
		const requestOptions = {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json', 'Authorization': getAuthToken() }
		};
		const query = await fetch(`${apiURL}/${url}/${id}`, requestOptions);
		if(query.status < 300){
			const json = await query.json();   
			if(json.statusCode == 200){
				if(json.data!=null && json.data!=''){
					return FcDecrypted(json.data);
				}else{
					return true;
				}
			} else {
				console.log('ERROR FETCH', json);
				Swal.fire({
					title: json.Message,
					text: json.Error,
					icon: 'error',
					confirmButtonText: 'Ok'
				});
				return null;
			}
		} else {
			Swal.fire({
				title: 'Error!',
				text: query.statusText,
				icon: 'error',
				confirmButtonText: 'Ok'
			});
			return null;	
		}
	}
	catch (e:any) { 
		console.log('fetch error', e, url);
		Swal.fire({
			title: 'Error!',
			text: e.toString(),
			icon: 'error',
			confirmButtonText: 'Ok'
		});
		return null;
	}
}