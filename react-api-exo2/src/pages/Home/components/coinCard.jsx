import { useContext } from 'react';
import './coinCard.css';
import { Mycontext } from '../../../utils/mycontext';
import { FiEye } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
function Coin(props) {
    const {coins}= useContext(Mycontext)
    const SearchByName = coins.slice(0,20).filter((coin)=>(
        coin.name.toLowerCase().includes(props.search.toLowerCase())
    ))
    console.log(SearchByName);
    SearchByName.sort((a,b)=>{
        if(props.theSelect === 'Highest price'){
            return b.quotes.USD.price - a.quotes.USD.price
        }
        if(props.theSelect === 'Lowest price'){
            return a.quotes.USD.price - b.quotes.USD.price
        }
        if(props.theSelect === 'Highest market cap'){
            return b.quotes.USD.market_cap - a.quotes.USD.market_cap
        }
})
    const navigate = useNavigate();
    return (
        <>
        {SearchByName.map((coin)=>(
            <div className='gidesDiv2' key={coin.id}>
                <p className='coinsInformation1'>{coin.rank}</p>
                <p className='coinsInformation'>{coin.name}</p>
                <p className='coinsInformation2'>{coin.symbol}</p>
                <p className='coinsInformation'>${coin.quotes.USD.price}</p>
                <p className='coinsInformation'>{coin.quotes.USD.percent_change_24h}</p>
                <p onClick={()=>navigate(coin.id)} className='coinsInformation1 detealsEye'><FiEye/></p>
            </div>
        ))}
        </>
    )
}
export default Coin;