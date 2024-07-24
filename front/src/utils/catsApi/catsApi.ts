const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export async function getCats(limit:number){
    try{

        let responce = await fetch(`${BASE_URL}?limit=${limit}&order=ASC`, {
            method: 'GET',
            headers: {
            'x-api-key': 'live_3RNxVEvRpAtvymOBP2mZFecH1YeDn9KeNfwUWnbCveHuNmw87sMWb55xKxQPPcGM',
            'Content-Type': 'application/json'
            }
        })

        if(responce.ok){
            return responce;
        } else {
            throw new Error(`При загрузке данных произошла ошибка. Код ошибки ${responce.status}`);
        }
    } catch(err:any) {
        return err.message;
    }
}