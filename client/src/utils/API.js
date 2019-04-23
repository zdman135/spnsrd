import axios from  'axios';

export default {
    login: function(login) {
        return axios.post("/api/users/login", login);
    },
    register: function(register) {
        return axios.post("/api/users/register", register);
    }
};