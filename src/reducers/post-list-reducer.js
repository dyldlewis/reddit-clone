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
    // case "LIKE_POST":
    //   const { likeCount, id }
    default:
      return state;
  }
}
