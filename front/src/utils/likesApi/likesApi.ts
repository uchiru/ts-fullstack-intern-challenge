const BASE_URL = 'http://localhost:3000';

export interface LikesApiInterface {
    url?: string
    catId: string
    token: string
  }

export async function getLikes(token: string) {
    try{
        let res = await fetch(`${BASE_URL}/likes`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },

        })
        if(res.status === 401) {
            throw new Error('Пользователь не авторизован');
        }
        if(!res.ok) {
            throw new Error('Произошла ошибка');
        }
        return res;
    }
    catch(err:any) {
        return err;
    }

}

export async function postLike({catId, url, token}: LikesApiInterface) {
    try{
        let res = await fetch(`${BASE_URL}/likes`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                cat_id: catId,
                url
            })
        })
        if(res.status === 401) {
            throw new Error('Пользователь не авторизован');
        }
        if(!res.ok) {
            throw new Error('Произошла ошибка');
        }
        return res;
    }
    catch(err:any) {
        return err;
    }

}

export async function deleteLike({catId, token}: LikesApiInterface) {
    try{
        let res = await fetch(`${BASE_URL}/likes/${catId}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        if(res.status === 401) {
            throw new Error('Пользователь не авторизован');
        }
        if(!res.ok) {
            throw new Error('Произошла ошибка');
        }
        return res;
    }
    catch(err: any) {
        return err;
    }

}