import api from '../api'

export default async function fetchUser(user){
    const response = await api.get(`/users/${user}`);
    console.log(response.data);
    return response.data;
}