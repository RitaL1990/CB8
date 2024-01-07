import './index.css'

const Heros = ({days}) => {
   return (
    <div className='heroCards'>
        {days.map(day => <div key={day} className='heroCard'>
        <h1 className='heroData'>{day.day}</h1>
        <img className='heroImg' src={day.image} alt={day.day} />
        </div>)}
    </div>
    )
   }

export default Heros

