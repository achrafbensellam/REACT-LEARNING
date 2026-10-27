import './form.css'
function Form() {
    return (
        <>
            <section className='ContactSection'>
                <p className='ContactSectionPara1'>YOUR FORM IS READY</p>
                <h1 className='ContactSectionPara2'>CONTACT US NOW</h1>
                <div className='discFORMdiv'>
                    <form action="" className='theFORM'>
                        <label className='InputTitles' htmlFor="" >Name :</label><br />
                        <input className='theINput' type="text" placeholder='EX: jhone snow' /><br />
                        <br />
                        <label className='InputTitles' htmlFor="">Email :</label><br />
                        <input className='theINput' type="email" placeholder='welcome@snow.com' /><br />
                        <br />
                        <label className='InputTitles' htmlFor="">Message :</label><br />
                        <textarea className='theINput1' name="" placeholder='your message ...' id="">
                        </textarea><br />
                        <button className='FormBTN'>SEND NOW</button>
                    </form>
                    <div className='FormDiscription'>
                        <h3 className='DISCRIPTION'>Description</h3>
                        <p className='LOREMdiscription'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Vel nobis similique commodi voluptatem excepturi nihil
                            nemo inventore facere magni magnam ipsum quis illo et
                            deleniti facilis a tempora voluptate nulla, illum eos.
                            Nemo cupiditate, error enim sed adipisci odit dicta
                            animi, nam ratione laborum atque? Deleniti ratione
                            blanditiis debitis! Sit! Lorem ipsum dolor sit amet
                            ea. Impedit dolorem obcaecati commodi? Autem, nemo
                            repellat ad quas nam voluptas iure voluptatem!
                            Cupiditate enim, ab eius porro quibusdam,
                            officia deleniti voluptates sequi nisi, doloremque fugit
                            facilis laborum tenetur ipsum voluptatem suscipit corrupti
                            magnam accusamus inventore voluptatibus adipisci doloribus.
                            Quaerat cum rem nisi voluptas voluptatum
                            soluta maxime iste vitae autem odit quibusdam consequuntur,

                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Form;