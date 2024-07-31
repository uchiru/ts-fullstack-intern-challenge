import { UserType } from "../../../Types/UserType/UserType";

const BASE_URL = 'http://localhost:3000';

export async function registerUser({ login, password }: UserType) {
    try{
        let res = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, password })
        })
        if(!res.ok) {
            throw new Error('Произошла ошибка')
        }
        return res;
    }
    catch(err){
        return err;
    }
}