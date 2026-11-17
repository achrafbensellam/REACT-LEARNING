/** ============================ start besmillah ================================*/
import { useState } from 'react';
import Coin from './components/coinCard';
import './Home.css';
function HomePage() {
    const [search,setSearch]= useState('');
    const [theSelect,setSelect]= useState('Highest price');

   
return (
        <>
        <section className='firstSection'>
            <div className='inputsDiv'>
                <input onChange={(e)=>{setSearch(e.target.value)}} className='searchInput' placeholder='Search by name ...' type="text" />
                <select onChange={(e)=>{setSelect(e.target.value)}} className='theSelect' name="" id="">
                    <option>Highest price</option>
                    <option>Lowest price</option>
                    <option>Highest market cap</option>
                </select>
            </div>
            <div className='CoinsCradsDiv'>
                <div className='gidesDiv'>
                    <p className='coinsInformation1 gidesDivTitles'>Rank</p>
                    <p className='coinsInformation gidesDivTitles'>Coin</p>
                    <p className='coinsInformation2 gidesDivTitles'>Symbol</p>
                    <p className='coinsInformation gidesDivTitles'>Price(USD)</p>
                    <p className='coinsInformation gidesDivTitles'>24h Change</p>
                    <p className='coinsInformation1 gidesDivTitles'>Action</p>
                </div>
                <Coin search={search} theSelect={theSelect}/>
            </div>
        </section>
        </>
    )
}
export default HomePage;
