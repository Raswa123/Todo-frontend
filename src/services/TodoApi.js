import apiService from "../api/apiService"


export const getTodo=async(reqBody)=>{
return await apiService("GET",'/todos',reqBody)
   
}

export const addTodo=async(reqBody)=>{
return await apiService("POST",'/todos',reqBody)
}

export const getTodoById=async(id)=>{
   return await apiService("GET",`/todos/${id}`)

}

export const updateTodo=async(id,reqBody)=>{
      return await apiService("PUT",`/todos/${id}`,reqBody)

}

export const deleteTodo=async(id)=>{
         return await apiService("DELETE",`/todos/${id}`,{})

}