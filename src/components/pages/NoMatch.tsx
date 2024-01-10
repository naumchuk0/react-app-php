import React from "react";
import {Button, Result} from 'antd';
import {Link} from "react-router-dom";

const NoMatch: React.FC = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="This page was not found"
            extra={
                <Link to={"/"}>
                    <Button type="primary">Go Home</Button>
                </Link>
            }
        />
    );
}
export default NoMatch;