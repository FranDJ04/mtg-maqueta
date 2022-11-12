import { useRouter } from "next/router";

export function DebugLog(...args:any) { 
    if(process.env.NODE_ENV === 'development') {
        console.log(
            "%c" + window.location.pathname , "color:blue"
            , ...args
        );
    }
}