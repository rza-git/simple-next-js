import BASE_URL from "@/lib/baseURL"

export const deleteTodo = async (id) => {

    try {
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
            method: "DELETE"
        })

        return response;
    } catch(err) {
        console.log(err);
        throw new Error({message: err.response.message})
    }
}