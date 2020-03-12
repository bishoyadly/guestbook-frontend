import React from "react";
import loginStyles from './Login.module.scss';
import {Form, Input, Button} from "antd";
import {Link} from "react-router-dom";

const layout = {
    labelCol: {
        span: 0,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 20,
    },
};

export default function Login() {

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={loginStyles.loginContainer}>
            <h1 className={loginStyles.signInHeader}> Sign in </h1>

            <Form
                {...layout}
                className={loginStyles.loginForm}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email address"
                    name="userEmail"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address!',
                        },
                    ]}
                >
                    <Input
                        placeholder={'Enter Email Address'}
                        className={loginStyles.inputField}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password
                        placeholder={'Enter Password'}
                        className={loginStyles.inputField}
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        className={loginStyles.submitButton}
                        type="primary"
                        htmlType="submit"
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>

            <Link
                className={loginStyles.signUpLink}
                to={'/signup'}
            >
                Sign up
            </Link>
        </div>
    );
}