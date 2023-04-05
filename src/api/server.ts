// Follow along specific code can be found in the comments below
// This code currenty is set up for the cars api

const token = 'b32c19534c91533bc77bf6b650d574610a23c107fd88bbb2';

export const server_calls = {
    get: async () => {
      const response = await fetch('https://resilient-childish-tortellini.glitch.me/api/cars', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
          
        }
    });
    if(!response.ok) {
        throw new Error('Something went wrong');
    }
    return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://resilient-childish-tortellini.glitch.me/api/cars`,{
            method : 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    if(!response.ok) {
        throw new Error(`Something went wrong adding this car`)
    }
    return await response.json()
},

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://resilient-childish-tortellini.glitch.me/api/cars/EUYl9Npx5vJUZby1Q-zLYo79a5SkCQzLy6YpeAKKhZ8`,{
            method : 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok) {
        throw new Error(`Something went wrong updating this car`)
        }
    },
    delete: async(id: string) => {
        const response = await fetch(`https://resilient-childish-tortellini.glitch.me/api/cars/${id}`,{
            method : 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
      }
} 

// const token = 'b32c19534c91533bc77bf6b650d574610a23c107fd88bbb2'

// export const server_calls = {
//     get: async () => {
//         const response = await fetch(`https://resilient-childish-tortellini.glitch.me/api/cars`,
//         {
//             method: 'GET',
//             mode: 'cors',

            
//         });

//         if(!response.ok) {
//             throw new Error('Failed to get stuff from the place');
//         }

//         return await response.json()
//     }

// } 