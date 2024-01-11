import {Button, Divider, Form, Input, Upload, message, Alert} from "antd";
import {useNavigate} from "react-router-dom";
import http_common from "../../../http_common.ts";
import React from "react";

const CategoryDeletePage = () => {

    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        try {
            await http_common.delete("/api/categories/delete/" + values.name);
            navigate("/");
        }
        catch (ex) {
            message.error('Error!');
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        name?: string;
    };

    const customDividerStyle = {
        borderTop: '2px solid #1890ff',
        margin: '5px 0 50px 0',
    };

    return (
        <>
            <Divider style={customDividerStyle}>Delete Category</Divider>
            <Form
                name="basic"
                style={{maxWidth: 1000}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Id"
                    name="name" //Не розумію як воно тут працює, чому я не можу написати name="id" чи id="id"
                    rules={[{required: true, message: 'Enter category id!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Delete
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default CategoryDeletePage;