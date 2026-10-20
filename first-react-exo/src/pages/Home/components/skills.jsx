import './hero.css'
import css from '../../../assets/img/css.png'
import html from '../../../assets/img/html.png'
import Javascript from '../../../assets/img/Javascript.png'
import react from '../../../assets/img/react.png'
function Skills() {
    return (
        <section className='skillsSec'>
            <p className='skills'> Skills</p>
            <div className='cards'>
                <div className='card1'>
                    <p>HTML</p>
                    <div><img className='logo' src={html} alt="" /></div>
                </div>
                <div className='card2'>
                    <p>CSS</p>
                    <div><img className='logo' src={css} alt="" /></div>
                </div>
                <div className='card3'>
                    <p>JavaScript</p>
                    <div><img className='logo' src={Javascript} alt="" /></div>
                </div>
                <div className='card4'>
                    <p>ReactJS</p>
                    <div><img className='logo' src={react} alt="" /></div>
                </div>
            </div>
        </section>
    )

}
export default Skills ;