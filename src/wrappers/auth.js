import { Redirect } from 'umi';

export default (props) => {
  const isLogin = true;
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/user/login" />;
  }
};
