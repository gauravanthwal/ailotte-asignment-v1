import axios from "axios";
const url = "https://randomuser.me/api/";

const randomExp = ()=>{
    return Math.floor(Math.random() * 10);
}

const getUser = async () => {
  return (await axios.get(url))?.data?.results[0];
};

export const loadUsers = async () => {
  const users = [...new Array(4)].map(() => getUser());

  const res = await Promise.all(users);
  const data = res.map((item) => ({ name: item.name, picture: item.picture, exp: randomExp()}));
  return data;
};
