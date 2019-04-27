import axios from  'axios';

export default {
    // User Routes
    login: function(login) {
        return axios.post("/api/users/login", login);
    },
    register: function(register) {
        return axios.post("/api/users/register", register);
    },
    getOneUser: function(user) {
        return axios.get(`/api/users/${user}`);
    },
    updateUser: function(email, update) {
        return axios.put(`/api/users/${email}`, update);
    },

    // Event Routes
    getEvents: "",
    getEventById: "",
    createEvent: function(event) {
        return axios.post("/api/events/createevent", event);
    },
    updateEvent: "",
    deleteEvent: ""
};