import React, { useCallback, useState, useEffect } from "react";
import "./Auth.css";
import { Form, Tooltip, Input, Checkbox, Button, Alert, notification, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons'
import axios from 'axios';
import { Link } from 'redux-little-router';

export const Auth = (props) => {
  console.log(props);
  const { login, pageStatus, error } = props;
  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState(false);

  const handleEmailChangeCallback = useCallback(
    (e) => {
      if (e.target) {
        setEmail(e.target.value);
        setEmailValidate(handleEmailValidate(e.target.value));
        console.log(emailValidate)
      }
    },
    [email]
  );

  const handlePasswordChangeCallback = useCallback(
    (e) => {
      if (e.target) {
        setPassword(e.target.value);
        setPasswordValidate(handlePasswordValidate(e.target.value));
        console.log(emailValidate)
      }
    },
    [password]
  );

  const loginCallback = () => {
    if(emailValidate && passwordValidate){
      login(email, password);
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
        {pageStatus === "LOADING" ? <div><Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/></div> : 
        <Form className="login-form">
          <h1>Авторизация</h1>
          <Form.Item>
              {pageStatus === "ERROR" ? openNotificationWithIcon() : ''}
              <Input
                placeholder="E-Mail"
                onChange={handleEmailChangeCallback}
                style={{borderColor: `${emailValidate == true ? 'green': 'red'}`}}
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
