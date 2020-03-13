import React, {useState} from "react";
import bookFormStyles from './BookForm.module.scss';
import {Input, Button, Modal} from "antd";
import MessageList from "../MessageList/MessageList";


export default function BookForm() {

    const [addMessageModalVisibility, setAddMessageModalVisibility] = useState(false);
    const [addMessageModalLoading, setAddMessageModalLoading] = useState(false);

    function onAddMessageOK() {
        setAddMessageModalLoading(true);
        setTimeout(() => {
            setAddMessageModalLoading(false);
            setAddMessageModalVisibility(false);
        }, 2000);
    }

    function showAddMessageModal() {
        setAddMessageModalVisibility(true);
    }

    function handleAddMessageModalCancel() {
        setAddMessageModalVisibility(false);
    }

    function addMessageModal() {
        return (
            <div>
                <Modal
                    title="Add New Message "
                    visible={addMessageModalVisibility}
                    onOk={onAddMessageOK}
                    confirmLoading={addMessageModalLoading}
                    onCancel={handleAddMessageModalCancel}
                >
                    <Input placeholder={'message text'}/>
                </Modal>
            </div>
        );
    }

    return (
        <div className={bookFormStyles.bookFormContainer}>
            <h1> Guest Book Messages </h1>
            <Button
                onClick={showAddMessageModal}
                className={bookFormStyles.addMessageButton}
                type="primary"
            >
                Add New Message
            </Button>
            <MessageList/>
            {addMessageModal()}
        </div>
    )
}