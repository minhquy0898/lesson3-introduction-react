import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <p className='header_title'>Enter your task here....</p>

            <form className='header_form'>
                <div className='form_task'>
                    <input type="radio" className='mg-r-40' />
                    <label htmlFor="">Clean up bedroom</label>
                </div>
                <div className='form_task'>
                    <input type="radio" className='mg-r-40' />
                    <label htmlFor="">Buy some milk</label>
                </div>
                <div className='form_task'>
                    <input type="radio" className='mg-r-40' />
                    <label htmlFor="">Jogging</label>
                </div>
                <div className='form_task'>
                    <input type="radio" className='mg-r-40' />
                    <label htmlFor="">Learn React</label>
                </div>
                <div className='form_task'>
                    <input type="radio" className='mg-r-40' />
                    <label htmlFor="">Doing Exercises</label>
                </div>
            </form>
        </div>
    )
}

export default Header
