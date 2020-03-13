import React, {useState} from "react";
import {Button, Input, List, Modal, Typography} from "antd";
import messageListStyles from './MessageList.module.scss';
import {CloseCircleOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";


const data = [
    {
        messageText: 'Racing car sprays burning fuel into crowd.',
        replyMessages: ['reply 1', 'reply 2']
    },
    {
        messageText: 'Racing car sprays burning fuel into crowd.',
        replyMessages: ['reply 1', 'reply 2']
    }
];


export default function MessageList() {

    const [replyModalVisibility, setReplyModalVisibility] = useState(false);
    const [replyModalLoading, setReplyModalLoading] = useState(false);

    function onAddReplyMessageOK() {
        setReplyModalLoading(true);
        setTimeout(() => {
            setReplyModalVisibility(false);
            setReplyModalLoading(false);
        }, 2000);
    }

    function showReplyModal() {
        setReplyModalVisibility(true);
    }

    function handleReplyModalCancel() {
        setReplyModalVisibility(false);
    }

    function replyMessageModal(messageObj) {
        return (
            <div>
                <Modal
                    title="Reply Message "
                    visible={replyModalVisibility}
                    onOk={onAddReplyMessageOK}
                    confirmLoading={replyModalLoading}
                    onCancel={handleReplyModalCancel}
                >
                    <Input placeholder={'reply message'}/>
                </Modal>
            </div>
        );
    }

    function replyMessagesList(replyMessages) {
        const arr = [];
        for (let i = 0; i < replyMessages.length; i++) {
            const item = <Typography.Text
                className={messageListStyles.replyMessages}
            >
                {replyMessages[i]}
            </Typography.Text>;
            arr.push(item);
        }
        return arr;
    }

    function messageItem(messageObj) {
        return (
            <List.Item
                className={messageListStyles.listItem}
            >
                <Input.Group compact>
                    <Input
                        placeholder={'message text'}
                        style={{width: '80%'}}
                        defaultValue={messageObj.messageText}
                    />
                    <Button>
                        <EditOutlined/>
                    </Button>
                    <Button onClick={showReplyModal}>
                        <PlusCircleOutlined/>
                    </Button>
                    <Button>
                        <CloseCircleOutlined/>
                    </Button>
                </Input.Group>
                {replyMessageModal()}
                {replyMessagesList(messageObj.replyMessages)}
            </List.Item>
        )
    }

    return (
        <List
            dataSource={data}
            renderItem={item => messageItem(item)}
        />
    );
}