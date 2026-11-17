import { useNavigate, useParams } from 'react-router-dom';
import './coinDetails.css'
import { useContext } from 'react';
import { Mycontext } from '../../../utils/mycontext';
import coinpic from '../../../assets/img/coin.jpg'
import { motion } from 'motion/react';
function CoinDetails() {
    const { id } = useParams();
    const { coins } = useContext(Mycontext);
    const findCoin = coins.find((coin) => {
        return coin.id === id
    });
    console.log(findCoin);
    const navigateBack = useNavigate();
    const box = {
        // width: 100,
        // height: 100,
        backgroundColor: "var(--hue-2)",
        borderRadius: 10,
    }
    return (
        <>
            <section className='contenaireDiv'>
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        // Will be used when gesture starts
                        transition: { duration: 0.1 }
                    }}
                    // Will be used when gesture ends
                    transition={{ duration: 0.5 }}
                    className='BTNgoBack' onClick={() => navigateBack(`/`)}>Back to market</motion.button>
                <motion.div className='contenaireDiv2'
                    drag style={box}>
                    <div className='coinPIcDiv'>
                        <div className='coinPic'>
                            <img className='coinPicture' src={coinpic} alt="" />
                        </div>
                        <div className='infodiv1'>
                            <p className='infodiv2'>{findCoin.name}</p>
                            <p>{findCoin.rank}</p>
                        </div>
                    </div>
                    <div className='infoDiv4'>
                        <div className='infoDiv3'>
                            <p>price :</p>
                            <p>{findCoin.quotes.USD.price}</p>
                        </div>
                        <div className='infoDiv3'>
                            <p>market cap :</p>
                            <p>{findCoin.quotes.USD.market_cap}</p>
                        </div>
                        <div className='infoDiv3'>
                            <p>volume :</p>
                            <p>{findCoin.quotes.USD.volume_24h}</p>
                        </div>
                        <div className='infoDiv3'>
                            <p>24h changes</p>
                           <p> {findCoin.quotes.USD.percent_change_24h}</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
export default CoinDetails;