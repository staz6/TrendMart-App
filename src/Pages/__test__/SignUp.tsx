import sideImage from "../../assets/SignUpSideImage.svg";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import googleIcon from "../../assets/Icon-Google.svg";
import { useReducer, useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface FormState {
  name: string;
  email: string;
  password: string;
  accountCreated: boolean;
  loginUser: boolean;
}

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "CREATE_ACCOUNT"; payload: boolean }
  | { type: "LOGIN_USER"; payload: boolean };

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "CREATE_ACCOUNT":
      return { ...state, accountCreated: action.payload };
    case "LOGIN_USER":
      return { ...state, loginUser: action.payload };
    default:
      return state;
  }
};

const SignUp: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);

  const initialState: FormState = {
    name: "",
    email: "",
    password: "",
    accountCreated: false,
    loginUser: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const navigate = useNavigate();

  const createAccount = (): void => {
    const { name, email, password } = state;
    if (name && email && password) {
      const userDetails = { name, email, password };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      console.log("Account created successfully");
      dispatch({ type: "CREATE_ACCOUNT", payload: true });
    } else {
      window.alert("Please fill out the form fields!");
    }
  };

  const loginUser = (): void => {
    const { email, password } = state;
    if (email && password) {
      const storedUserDetails = JSON.parse(
        localStorage.getItem("userDetails") || "{}",
      );
      if (
        storedUserDetails.email === email &&
        storedUserDetails.password === password
      ) {
        console.log("Login successful!");
        dispatch({ type: "LOGIN_USER", payload: true });
        window.alert("Login successful!");
        setLogin(true);
        navigate("/");
      } else {
        console.log("Invalid email or password.");
        window.alert("Invalid email or password. Please try again.");
      }
    } else {
      window.alert("Please fill out the email and password fields!");
    }
  };

  return (
    <div className="flex py-14 xl:py-10 ">
      <img
        data-testid="SidebarImage"
        src={sideImage}
        className="w-[48%] hidden md:flex"
        alt="Sign Up Side Image"
      />
      <div className="md:w-[52%] w-full flex justify-center items-center">
        {!state.accountCreated ? (
          <div className="flex flex-col">
            <h1 className="font-medium text-2xl text-text2 font-inter">
              {login ? "Log in to Exclusive" : "Create an account"}
            </h1>
            <p className="font-poppins text-text2 mt-3 mb-7 text-sm font-[500]">
              Enter your details below
            </p>
            <form className="flex gap-8 font-poppins flex-col w-72">
              {!login && (
                <Input
                  type="text"
                  onChange={(newValue) =>
                    dispatch({ type: "SET_NAME", payload: newValue })
                  }
                  onClick={() => {}}
                  value={state.name}
                  placeholder="Name"
                  className="pb-1 text-black border-opacity-60 bg-transparent placeholder:text-sm border-b placeholder:text-black placeholder:text-opacity-40 border-black outline-none"
                />
              )}
              <Input
                type="email"
                onChange={(newValue) =>
                  dispatch({ type: "SET_EMAIL", payload: newValue })
                }
                onClick={() => {}}
                value={state.email}
                placeholder="Email or Phone Number"
                className="pb-1 border-opacity-60 text-black bg-transparent placeholder:text-sm border-b placeholder:text-black placeholder:text-opacity-40 border-black outline-none"
              />
              <Input
                type="password"
                onChange={(newValue) =>
                  dispatch({ type: "SET_PASSWORD", payload: newValue })
                }
                onClick={() => {}}
                value={state.password}
                placeholder="Password"
                className="pb-1 border-opacity-60 text-black bg-transparent placeholder:text-sm border-b placeholder:text-black placeholder:text-opacity-40 border-black outline-none"
              />
              {!login ? (
                <>
                  <Button
                    icon=""
                    className="hover:bg-transparent border-button2 border rounded-sm hover:text-button2 bg-button2 p-3 w-full text-sm transition-all duration-200"
                    onClick={createAccount}
                    description="Create Account"
                    testid="CreateAccountBtn"
                  />
                  <Button
                    icon=""
                    className="bg-transparent -mt-5 hover:text-button2 rounded-sm border px-14 text-black flex flex-row-reverse items-center border-black border-opacity-40 justify-between p-3 w-full text-sm transition-all duration-200"
                    onClick={() => {}}
                    description="Sign up with Google"
                  >
                    <img className="h-5" src={googleIcon} alt="Google Icon" />
                  </Button>
                </>
              ) : (
                <div className="flex justify-between items-center">
                  <Button
                    icon=""
                    className="hover:bg-transparent w-20 border-button2 border rounded-sm hover:text-button2 bg-button2 p-3 text-sm transition-all duration-200"
                    onClick={loginUser}
                    testid="LogIn_Btn"
                    description="Log In"
                  />
                  <a href="" className="text-button2 hover:text-black">
                    Forget Password?
                  </a>
                </div>
              )}
            </form>
            {!login && (
              <div className="text-black text-sm mt-6 px-6 font-poppins items-baseline flex justify-between">
                <h1 className="text-opacity-70 text-black">
                  Already have an account?
                </h1>
                <Button
                  icon=""
                  className="font-medium border-b border-black"
                  onClick={() => setLogin(true)}
                  description="Log In"
                  testid="LogIn_Link"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="w-[90%] sm:px-10 px-5 text-text2 h-56 flex flex-col shadow-CustomBoxShadow justify-center items-center">
            <div className="flex gap-5 items-center h-auto">
              <h1 className="text-[0.9rem] md:text-xl font-poppins">
                Account Created Successfully
              </h1>
              <IoCheckmarkCircle size={40} />
            </div>
            <h1 className="text-center mt-3">
              Thank you for filling out our form. We will keep your information
              safe.
            </h1>
            <Button
              icon=""
              className="font-medium border-b border-black"
              onClick={() => {
                setLogin(true);
                dispatch({ type: "CREATE_ACCOUNT", payload: false });
              }}
              testid="LogIn_Link"
              description="Log In"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
