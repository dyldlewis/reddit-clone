export default (state = [], action ) => {
  switch (action.type) {
    case "ADD_POST":
      const { id, title, author, content, timePosted, likeCount  } = action;
      return [
        ...state,
        {
          id: id,
          title: title,
          author: author,
          content: content,
          timePosted: timePosted,
          likeCount: likeCount
        }
      ];
    case "LIKE_POST":
    var newState = state.slice();
    for (var i = 0; i < newState.length; i++) {
      if (action.id === newState[i].id) {
        newState[i].likeCount += 1;
      }
    }
    return newState;
    default:
      return state;
  }
}
