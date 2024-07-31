const BASE_URL = 'http://localhost:3000';

export async function postLike(catId:string, url: string, token: string) {
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
    catch(err) {
        return err;
    }

}

export async function deleteLike(id:string, token: string) {
    try{
        let res = await fetch(`${BASE_URL}/likes/${id}`, {
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
    catch(err) {
        return err;
    }

}