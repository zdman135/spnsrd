import axios from  'axios';

export default {
    // User Routes
    login: function(login) {
        return axios.post("/api/users/login", login);
    },
    register: function(register) {
        return axios.post("/api/users/register", register);
    },
    getUserById: function(userId) {
        return axios.get(`/api/users/${userId}`);
    },
    updateUserById: function(userId, updateUserData) {
        return axios.put(`/api/users/${userId}`, updateUserData);
    },

    // Event Routes
    getEvents: function() {
        return axios.get("/api/events/");
    },
    getEventById: function(eventId) {
        return axios.get(`/api/events/${eventId}`)
    },
    getEventsWithUserId: function(userId) {
        return axios.get(`/api/users/${userId}/events`)
    },
    createEvent: function(event) {
        return axios.post("/api/events/createevent", event);
    },
    updateEventById: function(eventId, eventUpdateData) {
        return axios.put(`/api/events/${eventId}`, eventUpdateData)
    },
    deleteEventById: function(eventId) {
        return axios.delete(`/api/events/${eventId}`)
    },
    getEventsByStatus: function(type) {
        return axios.get(`/api/events?sponsorship=${type}`)
    },
    getEventsByCategory: function(category){
        return axios.get(`/api/events?category=${category}`)
    },
    getEventsOneWeekAdvanced: function(){
        return axios.get('/api/events/?date=1week')
    }
};