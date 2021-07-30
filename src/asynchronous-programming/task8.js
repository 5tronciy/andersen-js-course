const getUsers = url => fetch(url);

async function foo(url) {
  try {
    const response = await getUsers(url);
    const [user] = await response.json();
    return console.log(user);
  } catch (error) {
    return console.log(error);
  }
}
