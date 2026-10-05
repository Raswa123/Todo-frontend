const API_URL = "https://todo-backend-49fj.onrender.com/todos";
export const getTodo=async()=>{
    const response=await fetch(API_URL);

    if(!response.ok){
        throw new Error("failed to fetch to-do items..")
    }
    return response.json();
}

export const addTodo=async(todo)=>{
    const response=await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    });

    if(!response.ok){
        throw new Error('failed to add to-do item')
    }
    return response.json();
}

export const getTodoById=async(id)=>{
    const response=await fetch(`${API_URL}/${id}`);

    if(!response.ok){
        throw new Error('failed to fetch to-do item')
    }
    return response.json();
}

export const updateTodo=async(id,todo)=>{
    const response=await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    });

    if(!response.ok){
        throw new Error('failed to update to-do item')
    }
    return response.json();
}

export const deleteTodo=async(id)=>{
    const response=await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    if(!response.ok){
        throw new Error('failed to delete to-do item')
    }
}