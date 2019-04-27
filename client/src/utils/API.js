import axios from  'axios';

export default {
    // User Routes
    login: function(login) {
        return axios.post("/api/users/login", login);
    },
    register: function(register) {
        return axios.post("/api/users/register", register);
    },
    getOneUserByEmail: function(user) {
        return axios.get(`/api/users/${user}`);
    },
    updateUserByEmail: function(email, updateUserData) {
        return axios.put(`/api/users/${email}`, updateUserData);
    },

    // Event Routes
    getEvents: function() {
        return axios.get("/api/events/");
    },
    getEventById: function(eventId) {
        return axios.get(`/api/events/${eventId}`)
    },
    createEvent: function(event) {
        return axios.post("/api/events/createevent", event);
    },
    updateEventById: function(eventId, eventUpdateData) {
        return axios.put(`/api/events/${eventId}`, eventUpdateData)
    },
    deleteEventById: function(eventId) {
        return axios.delete(`/api/events/${eventId}`)
    }
};