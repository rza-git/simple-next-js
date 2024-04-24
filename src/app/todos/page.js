import BASE_URL from "@/lib/baseURL";

async function getData() {
    const res = await fetch(`${BASE_URL}/todos`, {
        method: "GET"
    })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

const Todo = async () => {
    const data = await getData();

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Todo;