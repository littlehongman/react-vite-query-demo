import { useQueries } from "react-query"


interface Album {
    userId: number
    id: number
    title: string
}

interface User {
    id: number
    name: string
    username: string
    email: string
}

export const fetchData = async (userData: string): Promise<Album> => {
    // Perform the mutation logic, e.g., make an API request to update the user
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${userData}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
  
    return response.json();
};

export const fetchUserById = async (userId: number): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
       
    });

    if (!response.ok) {
        throw new Error('Failed to update user');
    }  

    return response.json();
}



// const userId: number[] = [1, 2, 3, 4, 5]

// const useUserAll = () => {
//     return 

// }



