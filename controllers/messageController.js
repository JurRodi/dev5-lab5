let messages = [
    {
        user: 'John',
        message: 'Hello'
    },
    {
        user: 'Jane',
        message: 'Hi'
    },
    {
        user: 'Obi wan',
        message: 'Hello there'
    }
];

const getAllMessages = (req, res) => {
    let response = {
        status: "success",
        message: 'All messages retrieved',
        data: messages
    }
    res.json(response);
};

const getMessageById = (req, res) => {
    const id = req.params.id;
    let response = {
        status: "success",
        message: 'Message retrieved with id: ' + id,
        data: messages[id]
    }
    res.json(response);
};

const createMessage = (req, res) => {
    const message = req.body;
    messages.push(message);
    let response = {
        status: "success",
        message: 'Message created successfully for user: ' + message.user,
        data: message
    }
    res.json(response);
};

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage
}