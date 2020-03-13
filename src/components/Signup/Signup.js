import React from "react";
import signUpStyles from './Signup.module.scss';
import {Form, Input, Button} from "antd";
import {Link} from "react-router-dom";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 10,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 20,
    },
};

export default function SignUp() {

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={signUpStyles.loginContainer}>
            <h1 className={signUpStyles.signInHeader}> Create New Account </h1>

            <Form
                {...layout}
                className={signUpStyles.loginForm}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}
                >
                    <Input
                        placeholder={'First Name'}
                        className={signUpStyles.inputField}
                    />
                </Form.Item>


                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}
                >
                    <Input
                        placeholder={'Last Name'}
                        className={signUpStyles.inputField}
                    />
                </Form.Item>

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
                        placeholder={'Email Address'}
                        className={signUpStyles.inputField}
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
                        className={signUpStyles.inputField}
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        className={signUpStyles.submitButton}
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Link
                className={signUpStyles.logInLink}
                to={'/login'}
            >
                Login
            </Link>
        </div>
    );
}