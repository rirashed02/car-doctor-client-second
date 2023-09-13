import { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../Shared/Social/Social';
const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className=" w-1/2 hero-content flex-col lg:flex-row ">
                    <div className="mr-10">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 sm:w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center font-bold text-3xl'>Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control mb-10">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="submit" value="Login" className='btn bg-red-500 hover:bg-red-500 text-white' />
                                </div>
                                <Social></Social>
                                <p className='text-center text-gray-500'>Have an Account? <Link className='text-red-500' to='/register'>Sign in</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;