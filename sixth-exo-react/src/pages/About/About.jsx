import './About.css'
function AboutPage() {
    return (
        <>
            <section className='aboutSection'>
                <p className='aboutSectionPara1'>ABOUT THIS PROJECT</p>
                <p className='aboutSectionPara2'>Learning React by building</p>
                <p className='aboutSectionPara3'>This beginner-to-intermediate exercise combines CRUD operations with React effects and a small
                    focus timer.</p>
                <p className='aboutSectionPara4'>Concepts practiced</p>
                <p className='aboutSectionPara5'><span className='aboutSectionPara6'>useState :</span> storing tasks, form inputs, filters and stopwatch values.</p>
                <p className='aboutSectionPara5'><span className='aboutSectionPara6'>CRUD :</span> create tasks with spread, update tasks with map, and delete with filter.</p>
                <p className='aboutSectionPara5'><span className='aboutSectionPara6'>useEffect :</span> saving to localStorage, updating the browser tab title, and cleaning up a stopwatch
                    interval.</p>
                <p className='aboutSectionPara5'><span className='aboutSectionPara6'>Props :</span> passing task data and event handlers to reusable child components.</p>
            </section>
        </>
    )
}
export default AboutPage;