const myAsyncFunction = async () => {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await userResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
    );
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (error) {
    console.log("there was an error");
  }
};
