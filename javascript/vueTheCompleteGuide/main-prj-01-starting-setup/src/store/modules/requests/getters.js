export default {
  requests(state, _, _2, rooGetters) {
    const coachId = rooGetters.userId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
