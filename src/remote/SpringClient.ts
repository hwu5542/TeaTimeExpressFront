import axios from 'axios';

const SpringClient = axios.create({
    baseURL:'http://ec2-3-143-204-100.us-east-2.compute.amazonaws.com:8081/teatimeexpress/',
    // baseURL:'http://localhost:8081/teatimeexpress/',
    headers: {
        'Content-Type':'application/json'
    }
})

export default SpringClient;