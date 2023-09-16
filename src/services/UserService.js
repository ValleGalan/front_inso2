import { BASE_API } from "../utils/constanst";


export async function addUserApi(data) { //, token
    try {
        const url = `${BASE_API}/users`;
        const params = {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

