const getBaseUrl = ()=>{
    if(import.meta.env.DEV){
        return "http://localhost:5000";
    }
    else{
        return "https://dahal-book-store-server.vercel.app";
    }
}

export default getBaseUrl;