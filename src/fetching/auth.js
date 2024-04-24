import BASE_URL from "@/lib/baseURL"

export const login = async (params) => {

    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            body: JSON.stringify(params)
        })

        const data = await response.json();

        return data;
    } catch(err) {
        console.log(err);
    }
}