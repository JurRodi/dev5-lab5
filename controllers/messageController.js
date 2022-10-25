const getAllMessages = (req, res) => {
    const messages = [
        {
            user: 'John',
            text: 'Hello'
        },
        {
            user: 'Jane',
            text: 'Hi'
        },
        {
            user: 'Obi wan',
            text: 'Hello there'
        }
    ];
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