import React from "react";
import loginStyles from './Login.module.scss';
import {Form, Input, Button} from "antd";
import {Link, useHistory, useLocation} from "react-router-dom";

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

export default function Login({AuthObj}) {

    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: "/guestBook"}};

    const onFinish = values => {
        AuthObj.authenticate(values.email, values.password, () => {
            history.replace(from);
        });
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
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address!',
                        },
                    ]}
                >
                    <Input
                        placeholder={'Email Address'}
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
                        placeholder={'Password'}
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