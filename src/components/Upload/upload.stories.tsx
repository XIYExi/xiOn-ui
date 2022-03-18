import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Upload } from "./upload";
import Button from '../Button/button'
import Icon from "../Icon/icon";

const filePromise = (file: File) => {
    const newFile = new File([file], "new_name.png", { type: file.type });
    return Promise.resolve(newFile);
};
const SimpleUpload = () => {
    return (
        <Upload
            // action = "https://jsonplaceholder.typicode.com/posts"
            beforeUpload={filePromise}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={action("changed")}
            onRemove={action("removed")}
            name="fileName"
            multiple
        >
            <Button>上传</Button>
        </Upload>
    );
};

const DragUpload = () => {
    return (
        <Upload
            beforeUpload={filePromise}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={action("changed")}
            onRemove={action("removed")}
            name="fileName"
            multiple
            drag
        >
            <Icon icon="upload" size="5x" theme="secondary" />
            <br />
            <p>Drag file over to upload</p>
        </Upload>
    );
};

storiesOf("Upload Component", module)
    .add("上传", SimpleUpload)
    .add("拖拽上传", DragUpload);