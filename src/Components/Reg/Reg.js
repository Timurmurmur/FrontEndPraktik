
import React, { useCallback, useState, useEffect } from "react";
import "./Reg.css";
import { Form, Tooltip, Input, Checkbox, Button } from "antd";
import axios from 'axios';
import { Link } from 'redux-little-router';

export const Reg = (props) => {
    console.log(props);
    const {reg, pageStatus} = props;
    const [email, setEmail] = useState("");
    const [emailValidate, setEmailValidate] = useState(false);
  
    const [password, setPassword] = useState("");
    const [passwordValidate, setPasswordValidate] = useState(false);
  
    const [login, setLogin] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordValidate, setConfirmPasswordValidate] = useState(false)
    const [nickname, setNickname] = useState("");

    const handleNicknameChangeCallback = useCallback(
      (e) => {
        if(e.target){
          setNickname(e.target.value);
        }
      },
      [nickname]
    )

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
    const handleConfirmPasswordChangeCallback = useCallback(
      (e) => {
        if(e.target){
          setConfirmPassword(e.target.value);
          if(password === e.target.value) {
            setConfirmPasswordValidate(true);
          } else {
            setConfirmPasswordValidate(false);
          }
        }
      },
      [confirmPassword, confirmPasswordValidate]
    )
    const handleLoginChangeCallback = useCallback(
      (e) => {
        if(e.target){
          setLogin(e.target.value);
        }
      },
      [login]
    )
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
  
    const regCallback = () => {
      if(emailValidate, passwordValidate, confirmPasswordValidate){
        reg(login,password,nickname,email);
      }
    };
  
    const handleEmailValidate = (value) => {
      return /^[a-z]+@[a-z]+\.[a-z]{2,}$/.test(value);
    };
    
    const handlePasswordValidate = (value) => {
      return /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(value);
    }
  
    return (
      <div className="container container_comp_reg">
          <Form className="login-form">
            <h1>Регистрация</h1>
            <Form.Item>
                <Input
                  placeholder="Nickname"
                  onChange={handleNicknameChangeCallback}
                  value={nickname}
                />
            </Form.Item>
            <Form.Item>
                <Input
                  placeholder="Login"
                  onChange={handleLoginChangeCallback}
                  value={login}
                />
            </Form.Item>
            <Form.Item>
                <Input
                  placeholder="E-Mail"
                  onChange={handleEmailChangeCallback}
                  style={{borderColor: `${emailValidate === true ? 'green': 'red'}`}}
                  value={email}
                />
            </Form.Item>
            <Form.Item>
                <Input.Password
                  type="password"
                  onChange={handlePasswordChangeCallback}
                  style={{borderColor: `${passwordValidate === true ? 'green': 'red'}`}}
                  placeholder="Password"
                  value={password}
                />
            </Form.Item>
            <Form.Item>
                <Input.Password
                  type="password"
                  onChange={handleConfirmPasswordChangeCallback}
                  style={{borderColor: `${confirmPasswordValidate === true ? 'green': 'red'}`}}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={regCallback}
              >
                Create account!
              </Button>
              Already have account ? <Link href={{ pathname: '/auth'}}>Login now!</Link>
            </Form.Item>
          </Form>
        </div>
    );
  };
  