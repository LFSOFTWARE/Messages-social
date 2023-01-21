import axios from 'axios';

export const LoginPost = async (email, password) => {
  try {
    const res = await axios.post(
      'http://192.168.0.228:3000/api/v1/users/passport/login',
      {
        email,
        password,
      },
    );

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
