import React, { useReducer, useEffect } from "react";
import Input from "../shared/Input";

interface CheckoutFormType {
  setFilledForm: (filled: boolean) => void;
}

// Define action types for the reducer
type FormAction = { type: "SET_FIELD"; field: string; value: string };

interface FormState {
  firstName: string;
  companyName: string;
  streetAddress: string;
  apartment: string;
  townCity: string;
  phoneNumber: string;
  emailAddress: string;
}

// Initial state
const initialState: FormState = {
  firstName: "",
  companyName: "",
  streetAddress: "",
  apartment: "",
  townCity: "",
  phoneNumber: "",
  emailAddress: "",
};

// Reducer function
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const CheckoutForm: React.FC<CheckoutFormType> = ({ setFilledForm }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    if (
      state.firstName.trim() &&
      state.streetAddress.trim() &&
      state.townCity.trim() &&
      state.phoneNumber.trim() &&
      state.emailAddress.trim()
    ) {
      setFilledForm(true);
      console.log("True");
    } else {
      setFilledForm(false);
      console.log("false");
    }
  }, [
    setFilledForm,
    state.emailAddress,
    state.firstName,
    state.phoneNumber,
    state.streetAddress,
    state.townCity,
  ]);

  const handleInputChange = (field: string, value: string) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  return (
    <>
      <h1 className="text-3xl font-medium mb-4">Billing Details</h1>
      <form className="pt-6 pb-8 mb-4">
        <label
          className="block text-black text-opacity-40 text-sm mb-2"
          htmlFor="first-name"
        >
          First Name*
        </label>
        <Input
          type="text"
          placeholder=""
          value={state.firstName}
          onChange={(value) => handleInputChange("firstName", value)}
          className="p-2 rounded w-full bg-secondary mb-6"
          onClick={() => {}}
        />

        <label
          className="block text-black text-opacity-40 text-sm mb-2"
          htmlFor="company-name"
        >
          Company Name
        </label>
        <Input
          type="text"
          placeholder=""
          value={state.companyName}
          onChange={(value) => handleInputChange("companyName", value)}
          className="p-2 rounded w-full bg-secondary mb-6"
          onClick={() => {}}
        />

        <label
          className="block text-black text-opacity-40 text-sm mb-2"
          htmlFor="street-address"
        >
          Street Address*
        </label>
        <Input
          type="text"
          placeholder=""
          value={state.streetAddress}
          onChange={(value) => handleInputChange("streetAddress", value)}
          className="p-2 rounded w-full bg-secondary mb-6"
          onClick={() => {}}
        />

        <label
          className="block text-black text-opacity-40 text-sm mb-2"
          htmlFor="apartment"
        >
          Apartment, floor, etc. (optional)
        </label>
        <Input
          type="text"
          placeholder=""
          value={state.apartment}
          onChange={(value) => handleInputChange("apartment", value)}
          className="p-2 rounded w-full bg-secondary mb-6"
          onClick={() => {}}
        />

        <label
          className="block text-black text-opacity-40 text-sm mb-2"
          htmlFor="town-city"
        >
          Town/City*
        </label>
        <Input
          type="text"
          placeholder=""
          value={state.townCity}
          onChange={(value) => handleInputChange("townCity", value)}
          className="p-2 rounded w-full bg-secondary mb-6"
          onClick={() => {}}
        />

        <label
          className="block text-black text-opacity-40 text-sm mb-2"
          htmlFor="phone-number"
        >
          Phone Number*
        </label>
        <Input
          type="tel"
          placeholder=""
          value={state.phoneNumber}
          onChange={(value) => handleInputChange("phoneNumber", value)}
          className="p-2 rounded w-full bg-secondary mb-6"
          onClick={() => {}}
        />

        <label
          className="block text-black text-opacity-40 text-sm mb-2"
          htmlFor="email-address"
        >
          Email Address*
        </label>
        <Input
          type="email"
          placeholder=""
          value={state.emailAddress}
          onChange={(value) => handleInputChange("emailAddress", value)}
          className="p-2 rounded w-full bg-secondary mb-6"
          onClick={() => {}}
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="save-info"
            className="mr-2 leading-tight accent-button2"
          />
          <label htmlFor="save-info" className="text-sm">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
