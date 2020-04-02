import React, { useCallback, useState, useEffect } from "react";
import "./Auth.css";
import { Form, Tooltip, Input, Checkbox, Button, Alert, notification, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons'
import axios from 'axios';
import { Link } from 'redux-little-router';
import { Loader } from "../Loader/Loader";

export const Auth = (props) => {
  console.log(props);
  const { login, pageStatus, error } = props;
  const [Login, setLogin] = useState("");

  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState(false);
  const handleLoginChangeCallback = useCallback(
    (e) => {
      if (e.target) {
        setLogin(e.target.value);
      }
    },
    [Login]
  );

  const handlePasswordChangeCallback = useCallback(
    (e) => {
      if (e.target) {
        setPassword(e.target.value);
        setPasswordValidate(handlePasswordValidate(e.target.value));
      }
    },
    [password]
  );

  const loginCallback = () => {
    if(passwordValidate){
      login(Login, password);
    }
  };

  const handleEmailValidate = (value) => {
    return /^[a-z]+@[a-z]+\.[a-z]{2,}$/.test(value);
  };
  
  const handlePasswordValidate = (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(value);
  }
  
  const openNotificationWithIcon = () => {
    notification['error']({
      message: 'Зарегистрируйтесь',
      description:
        error,
    });
  };
  
  return (
    <div className="container container_comp_auth">
        {pageStatus === "LOADING" ? <Loader /> : 
        <Form className="login-form">
          <h1>Авторизация</h1>
          <Form.Item>
              {pageStatus === "ERROR" ? openNotificationWithIcon() : ''}
              <Input
                placeholder="Login"
                onChange={handleLoginChangeCallback}
              />
          </Form.Item>
          <Form.Item>
              <Input.Password
                type="password"
                onChange={handlePasswordChangeCallback}
                style={{borderColor: `${passwordValidate == true ? 'green': 'red'}`}}
                placeholder="Password"
              />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={loginCallback}
            >
              Log in
            </Button>
            Or <Link href={{ pathname: '/reg' }}>register now!</Link>
          </Form.Item>
        </Form>
        }
  </div>
  );
};
