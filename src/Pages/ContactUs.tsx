import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/compound/Wrapper";
import callIcon from "../assets/icons-phone.svg";
import mailIcon from "../assets/icons-mail.svg";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_MESSAGE"; payload: string };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const ContactUs: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    const { name, email, phone, message } = state;

    if (!name || !email || !phone || !message) {
      window.alert("All fields are required!");
    } else {
      window.alert("Your email has been submitted. We will reply ASAP!");
      dispatch({ type: "SET_NAME", payload: "" });
      dispatch({ type: "SET_EMAIL", payload: "" });
      dispatch({ type: "SET_PHONE", payload: "" });
      dispatch({ type: "SET_MESSAGE", payload: "" });
    }
  };

  return (
    <Wrapper>
      <h1 className="text-black my-16">
        <Link to="/">Home</Link>
        <span> / </span>
        <span className="text-black">About</span>
      </h1>

      <div className="lg:grid grid-cols-12 font-poppins gap-8 text-black mb-10 w-full">
        <div className="lg:col-span-4 px-10 py-12 h-fit shadow-CustomBoxShadow">
          <div className="flex items-center gap-5">
            <img src={callIcon} alt="" />
            <h1 className="capitalize text-lg font-medium">Call To Us</h1>
          </div>
          <p className="mt-5">We are available 24/7, 7 days a week.</p>
          <p className="mt-4">Phone: +8801611112222</p>
          <hr className="my-7 border border-black border-opacity-35" />

          <div className="flex items-center gap-5">
            <img src={mailIcon} alt="" />
            <h1 className="capitalize text-lg font-medium">Write To US</h1>
          </div>
          <p className="mt-5">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="mt-4">Emails: customer@exclusive.com</p>
          <p className="mt-4">Emails: support@exclusive.com</p>
        </div>

        <div className="lg:col-span-8 border shadow-CustomBoxShadow">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Input
                type="text"
                placeholder="Your Name *"
                value={state.name}
                onChange={(value) =>
                  dispatch({ type: "SET_NAME", payload: value })
                }
                className="p-2 rounded w-full bg-secondary"
                onClick={() => {}}
              />
              <Input
                type="email"
                placeholder="Your Email *"
                value={state.email}
                onChange={(value) =>
                  dispatch({ type: "SET_EMAIL", payload: value })
                }
                className="p-2 rounded w-full bg-secondary"
                onClick={() => {}}
              />
              <Input
                type="text"
                placeholder="Your Phone *"
                value={state.phone}
                onChange={(value) =>
                  dispatch({ type: "SET_PHONE", payload: value })
                }
                className="p-2 rounded w-full bg-secondary"
                onClick={() => {}}
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                value={state.message}
                onChange={(e) =>
                  dispatch({ type: "SET_MESSAGE", payload: e.target.value })
                }
                className="w-full h-56 p-4 rounded bg-secondary"
              />
            </div>
            <div className="flex justify-end">
              <Button
                testid="ContactFormBtn"
                onClick={handleSubmit}
                icon={null}
                className="bg-button2 text-sm text-white py-4 px-10 rounded hover:bg-red-600 transition bg-t"
                description="Send Message"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
