import { useContext } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
const Social = () => {
    const {googleSignInWithPopup} = useContext(AuthContext);

    const handleGoogle = () => {
        googleSignInWithPopup()
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider my-5">OR</div>
            <div className="text-4xl flex mb-7 justify-center">
            <button><FaFacebook className="bg-white text-[#3B5998] mr-3"></FaFacebook></button>
            <button><FaLinkedin className="text-[#0A66C2] mr-3"></FaLinkedin></button>
            <button onClick={handleGoogle}><FcGoogle className=" mr-3"></FcGoogle></button>
        </div>
        </div>
    );
};

export default Social;