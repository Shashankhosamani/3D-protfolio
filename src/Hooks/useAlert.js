import React, { useState } from 'react'

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    const showAlert = ({ text, type = 'danger' }) => setAlert({
        show: true,
        text,
        type
    });

    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    });

    return { alert, showAlert, hideAlert }; // Return an object containing the values
}

export default useAlert;
