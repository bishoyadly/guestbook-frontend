import React, {useState} from "react";
import bookFormStyles from './BookForm.module.scss';
import {Input, Button, Modal} from "antd";
import MessageList from "../MessageList/MessageList";
import {useHistory} from 'react-router-dom';
import {addMessage} from "../../apis/apis";

const baseURL = process.env.REACT_APP_BaseURL;
export default function BookForm({AuthObj}) {

    const history = useHistory();
    const [addMessageModalVisibility, setAddMessageModalVisibility] = useState(false);
    const [addMessageModalLoading, setAddMessageModalLoading] = useState(false);
    const [messageText, setMessageText] = useState('');

    function onAddMessageOK() {
        setAddMessageModalLoading(true);
        addMessage(messageText)
            .then(() => {
                setAddMessageModalLoading(false);
                setAddMessageModalVisibility(false);
            })
            .catch(() => {
                setAddMessageModalLoading(false);
                setAddMessageModalVisibility(false);
            });
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
                    <Input
                        onChange={event => setMessageText(event.target.value)}
                        placeholder={'message text'}/>
                </Modal>
            </div>
        );
    }

    function signOut() {
        AuthObj.signout(() => history.push(`/`));
    }

    return (
        <div className={bookFormStyles.bookFormContainer}>
            <div className={bookFormStyles.headerTitle}>
                <h1
                > Guest Book Messages
                </h1>
                <Button
                    onClick={signOut}
                    className={bookFormStyles.signOutButton}
                    type="danger"
                >
                    Sign out
                </Button>
            </div>
            <Button
                onClick={showAddMessageModal}
                className={bookFormStyles.addMessageButton}
                type="primary"
            >
                Add New Message
            </Button>
            <MessageList
                addMessageModalVisibility={addMessageModalVisibility}
            />
            {addMessageModal()}
        </div>
    )
}