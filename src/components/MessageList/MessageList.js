import React, {useState, useEffect} from "react";
import {Button, Input, List, Modal, Typography} from "antd";
import messageListStyles from './MessageList.module.scss';
import {CloseCircleOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {deleteMessage, getMessages, updateMessage} from "../../apis/apis";
import {message} from "antd";

export default function MessageList({addMessageModalVisibility}) {

    const [messageList, setMessageList] = useState([]);
    const [replyModalVisibility, setReplyModalVisibility] = useState(false);
    const [replyModalLoading, setReplyModalLoading] = useState(false);
    const [replyMessageText, setReplyMessageText] = useState('');
    const [messageText, setMessageText] = useState('');
    const [currentMessageObj, setCurrentMessageObj] = useState({});
    const [listChange, setListChange] = useState(false);

    useEffect(() => {
        getMessages().then(response => {
            setMessageList(response.data);
        })
    }, [replyModalVisibility, addMessageModalVisibility, listChange]);

    function onAddReplyMessageOK() {
        setReplyModalLoading(true);
        currentMessageObj.replyMessages.push(replyMessageText);
        updateMessage(currentMessageObj)
            .then(() => {
                setReplyModalVisibility(false);
                setReplyModalLoading(false);
            })
            .catch(() => {
                setReplyModalVisibility(false);
                setReplyModalLoading(false);
            });
    }

    function showReplyModal() {
        setReplyModalVisibility(true);
    }

    function handleReplyModalCancel() {
        setReplyModalVisibility(false);
    }

    function replyMessageModal() {
        return (
            <div>
                <Modal
                    title="Reply Message "
                    visible={replyModalVisibility}
                    onOk={onAddReplyMessageOK}
                    confirmLoading={replyModalLoading}
                    onCancel={handleReplyModalCancel}
                >
                    <Input
                        onChange={(event) => setReplyMessageText(event.target.value)}
                        placeholder={'reply message'}
                    />
                </Modal>
            </div>
        );
    }

    function replyMessagesList(replyMessages) {
        const arr = [];
        for (let i = 0; i < replyMessages.length; i++) {
            const item = <Typography.Text
                key={i}
                className={messageListStyles.replyMessages}
            >
                {replyMessages[i]}
            </Typography.Text>;
            arr.push(item);
        }
        return arr;
    }

    function onEditMessage(messageObj) {
        const newMessageObj = {...messageObj};
        newMessageObj.messageText = messageText || newMessageObj.messageText;
        updateMessage(newMessageObj)
            .then(() => {
                message.success('Message edited successfully');
            })
            .catch(() => {
                message.error('Edit Failed');
            });
    }

    function onDeleteMessage(messageId) {
        setListChange(!listChange);
        deleteMessage(messageId)
            .then(() => {
                message.success('Message deleted successfully');
            })
            .catch(() => {
                message.error('Deletion Failed');
            });
    }

    function messageItem(messageObj) {
        return (
            <List.Item
                key={messageObj._id}
                className={messageListStyles.listItem}
            >
                <Input.Group compact>
                    <Input
                        onChange={(event) => {
                            setMessageText(event.target.value);
                        }}
                        placeholder={'message text'}
                        style={{width: '80%'}}
                        defaultValue={messageObj.messageText}
                    />
                    <Button
                        onClick={() => {
                            onEditMessage(messageObj);
                        }}>
                        <EditOutlined/>
                    </Button>
                    <Button onClick={() => {
                        setCurrentMessageObj(messageObj);
                        showReplyModal();
                    }}>
                        <PlusCircleOutlined/>
                    </Button>
                    <Button
                        onClick={() => onDeleteMessage(messageObj._id)}
                    >
                        <CloseCircleOutlined/>
                    </Button>
                </Input.Group>
                {replyMessagesList(messageObj.replyMessages)}
            </List.Item>
        )
    }

    return (
        <div>
            <List
                dataSource={messageList}
                renderItem={messageObj => messageItem(messageObj)}
            />
            {replyMessageModal()}
        </div>
    );
}