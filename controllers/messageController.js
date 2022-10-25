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

module.exports = {
    getAllMessages
}