export async function getAllPostIds() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();

  return data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
}

export async function getPostData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return {
    data,
  };
}
