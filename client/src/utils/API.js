import axios from  'axios';

export default {
    login: function(login) {
        return axios.post("/api/users/login", login);
    },
    register: function(register) {
        return axios.post("/api/users/register", register);
    },
    getEvents: "", // TODO
    getEventById: "",
    createEvent: function(event) {
        return axios.post("/api/events/createevent", event);
    },
    updateEvent: "",
    deleteEvent: ""
};