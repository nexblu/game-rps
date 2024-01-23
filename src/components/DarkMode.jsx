import { Image } from 'react-bootstrap';
import LightTheme from '../../static/image/day.png'
import DarkTheme from '../../static/image/night.png'

const DarkMode = (prop) => {
    let { isChecked, handleChange } = prop;

    const ImageTheme = () => {
        if (isChecked) {
            return LightTheme
        } else {
            return DarkTheme
        }
    }
    return (
        <>
            <div className="d-flex justify-content-end">
                <Image src={ImageTheme()} onClick={handleChange} itemType='button' className='dark-switch rounded-circle me-2'></Image>
            </div>
        </>
    );
};

export default DarkMode;