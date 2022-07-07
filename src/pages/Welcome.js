import logo from '../assets/logo.png'

const Welcome = () => {
    return(
        <div>
            <h1 className="fw-bold text-primary">Welcome Home!</h1>
            <img src={logo}
            alt="logo"/>
        </div>
        
    )
}

export default Welcome;