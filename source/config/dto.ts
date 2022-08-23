const sendResponse = (res: any, code: any, message: any, data: any) => {
    let response = {
        code,
        message,
        summary: data ? data : []
    };
    return res.status(code).json(response);
};

const errReturned = (res: any, err: any) => {
    console.log(err);
    res.status(400).json({
        code: 400,
        message: err.message || err
    });
};

export default { sendResponse, errReturned };
