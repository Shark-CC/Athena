import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from './imgs/logo.png';
import './css/login.less';

class Login extends Component {
  passwordValidator = (rule, value, callback) => {
    if (!value) {
      callback('密码必须输入');
    } else if (value.length > 12) {
      callback('密码请小于等于12位');
    } else if (value.length < 4) {
      callback('密码请大于等于4位');
    } else if (/^\w+$/.test(value)) {
      callback('请输入数字字母下划线');
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="login">
        <div className="header">
          <img src={logo} alt="logo" />
          <h1>商品管理系统QAQ</h1>
        </div>
        <div className="content">
          <h1>用户登录</h1>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: '请输入用户名~' },
                  { max: 12, message: '用户名请小于12位' },
                  { min: 4, message: '用户名请大于4位' },
                  { pattern: /^\w+$/, message: '用户名必须是英文数字下划线组合' }
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ validator: this.passwordValidator }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
              <a className="login-form-forgot" href=""></a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);
