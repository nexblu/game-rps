import { Form } from 'react-bootstrap';

const DarkMode = ( prop ) => {
    let { isChecked, handleChange } = prop;
    return (
        <>
            <Form className={`switch-dark-mode ${isChecked}`}>
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