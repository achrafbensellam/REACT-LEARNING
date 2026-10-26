import './aboutStore.css';
function AboutStore() {
    return (
        <>
            <section className='AboutStoreSection'>
                <div>
                    <h3 className='AboutStoreSectionPara1'>BENSELLAM-TECH</h3>
                    <h1 className='AboutStoreSectionPara2'>ABOUT BENSELLAM TECH</h1>
                    <p className='AboutStoreSectionPara3'>Empowering your home office with next-generation productivity technology.</p>
                </div>
                <div className='AboutOurStory'>
                    <h1 className='AboutOurStoryPara1'>Our Story</h1>
                    <p className='AboutOurStoryPara2'>Founded with a vision to revolutionize digital workspaces,
                        Bensellam Tech curates premium, next-generation devices
                        designed to power creativity, development, and everyday
                        productivity.</p>
                    <p className='AboutOurStoryPara2'>We bridge the gap between advanced technology and
                        seamless workflows.</p>
                </div>
                <div className='AboutStoreFeatchers'>
                    <div className='AboutStoreFeatchersDiv1'>
                        <h2 style={{color:'rgb(185, 142, 73)'}}>Our Mission</h2>
                        <p>To equip modern workspaces with robust
                            ecosystem hardware that maximizes
                            output and inspires creativity.</p>
                    </div>
                    <div className='AboutStoreFeatchersDiv1'>
                        <h2 style={{color:'rgb(185, 142, 73)'}}>Authenticity Guarantee</h2>
                        <p>We ensure every workstation, laptop,
                            and accessory is 100% genuine and fully
                            covered by reliable support.</p>
                    </div>
                    <div className='AboutStoreFeatchersDiv1'>
                        <h2 style={{color:'rgb(185, 142, 73)'}}>Innovating For 2026</h2>
                        <p>Future-focused solutions and smart
                            hardware handpicked for the evolving
                            demands of tomorrow.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutStore;