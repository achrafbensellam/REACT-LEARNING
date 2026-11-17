/** ============================ start besmillah ================================*/
import { useContext } from 'react';
import './Header.css'
import { Mycontext } from '../utils/mycontext';
import headerPic from '../assets/img/coin.jpg'
import { motion } from 'motion/react';
function PageHeader() {
    const { refrech, setRefrech } = useContext(Mycontext)
    let refrechData = () => {
        if (refrech === true) {
            setRefrech(false)
        } else {
            setRefrech(true)
        }
    }


    return (
        <>
            <header className='theHeader'>
                <div className='headerPicDivfother'>
                    <motion.div
                     animate={{ x: [0, 100, 0] }} className='headerPicDiv'>
                        <img className='headerPic' src={headerPic} alt="" />
                    </motion.div>
                    <p className='CryptoMarket'>Crypto Market.</p>
                </div>

                <button
                    className='headerBtn' onClick={refrechData}>
                    Refresh
                </button>
            </header>
        </>
    )
}
export default PageHeader;

