export default (state = [], action ) => {
  switch (action.type) {
    case "ADD_POST":
    const { id, title, author, content  } = action;
    return [
      ...state,
      {
        id: id,
        title: title,
        author: author,
        content: content
      }
    ];
    default:
    return state;
  }
}
