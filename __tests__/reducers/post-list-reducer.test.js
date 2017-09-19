import constants from "./../../src/constants";
import postList from "./../../src/reducers/post-list-reducer";

describe("Post List reducer", () => {
  let action;
  const postInfo = {
    title: "How to eat noodles",
    author: "young dyl",
    content: "This is awesome",
    id: 0
  };

  test("should return equivalent state if no action type is recognized", () => {
    action = { type: null };
    expect(postList([], action)).toEqual([]);
  });
  
});
