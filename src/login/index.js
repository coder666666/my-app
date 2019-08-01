import React, { useState, useEffect } from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { login } from '../server/login'

import './index.scss'

const Login = (props) => {
  const { getFieldDecorator, validateFields, getFieldsValue, setFieldsValue } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    validateFields(async (err, values) => {
      if (!err) {

        if (values.remember) {
          localStorage.setItem('username', values.username);
          localStorage.setItem('password', values.password);
        }

        const data = await login({
          method: 'post',
          data: values
        });

        if (data) {
          props.history.push('/home')
        }
      }
    });
  }

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
            initialValue: localStorage.getItem('username')
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
            initialValue: localStorage.getItem('password')
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <span>Or <a href="">register now!</a></span>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form.create({ name: 'normal_login' })(Login)
