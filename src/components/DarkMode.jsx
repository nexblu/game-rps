import { Form } from 'react-bootstrap';

const DarkMode = ({ isChecked, handleChange }) => {
    return (
        <>
            <Form className='switch-dark-mode'>
                <Form.Check
                    type="switch"
                    id="dark-mode-switch"
                    className='text-center'
                    onClick={handleChange}
                />
            </Form>
            <br />
        </>
    );
};

export default DarkMode;