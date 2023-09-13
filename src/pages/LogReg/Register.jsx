import { useContext } from 'react';
import registerImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Social from '../Shared/Social/Social';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className=" w-1/2 hero-content flex-col lg:flex-row ">
                    <div className="mr-10">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 sm:w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center font-bold text-3xl'>Sign Up</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="submit" value="Sign Up" className='btn bg-red-500 text-white hover:bg-red-500' />
                                </div>
                                <Social></Social>
                                <p className='text-center text-gray-500'>Already Have an Account? <Link className='text-red-500' to='/login'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;