import React, { useReducer } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

interface ProfileState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
const initialState: ProfileState = {
  firstName: "Md",
  lastName: "Rimel",
  email: "rimel1111@gmail.com",
  address: "Kingston, 5236, United State",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const profileReducer = (
  state: ProfileState,
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_CURRENT_PASSWORD":
      return { ...state, currentPassword: action.payload };
    case "SET_NEW_PASSWORD":
      return { ...state, newPassword: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

const MyProfile: React.FC = () => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const handleSaveChanges = () => {
    // Logic for saving changes
  };

  return (
    <div className="lg:col-span-8 border shadow-CustomBoxShadow">
      <div className="py-10 px-16">
        <h2 className="text-2xl font-medium text-button2 mb-4">
          Edit Your Profile
        </h2>

        <form className="flex flex-col gap-4">
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <h1 className="text-black font-medium">First Name: </h1>
              <Input
                type="text"
                placeholder="First Name"
                value={state.firstName}
                onChange={(value) =>
                  dispatch({ type: "SET_FIRST_NAME", payload: value })
                }
                className="mt-2 w-full text-black text-opacity-50 p-2 rounded-sm flex-1 bg-secondary"
                onClick={() => {}}
              />
            </div>
            <div className="w-full">
              <h1 className="text-black font-medium">Last Name: </h1>
              <Input
                type="text"
                placeholder="Last Name"
                value={state.lastName}
                onChange={(value) =>
                  dispatch({ type: "SET_LAST_NAME", payload: value })
                }
                className="mt-2 w-full text-black text-opacity-50 p-2 rounded-sm flex-1 bg-secondary"
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <h1 className="text-black font-medium">Email: </h1>
              <Input
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={(value) =>
                  dispatch({ type: "SET_EMAIL", payload: value })
                }
                className="mt-2 w-full text-black text-opacity-50 p-2 rounded-sm flex-1 bg-secondary"
                onClick={() => {}}
              />
            </div>
            <div className="w-full">
              <h1 className="text-black font-medium">Address: </h1>
              <Input
                type="text"
                placeholder="Address"
                value={state.address}
                onChange={(value) =>
                  dispatch({ type: "SET_ADDRESS", payload: value })
                }
                className="mt-2 w-full text-black text-opacity-50 p-2 rounded-sm flex-1 bg-secondary"
                onClick={() => {}}
              />
            </div>
          </div>

          <h3 className="font-medium mt-4">Password Changes</h3>
          <Input
            type="password"
            placeholder="Current Password"
            value={state.currentPassword}
            onChange={(value) =>
              dispatch({ type: "SET_CURRENT_PASSWORD", payload: value })
            }
            className="mt-2 w-full text-black text-opacity-50 p-2 rounded-sm flex-1 bg-secondary"
            onClick={() => {}}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={state.newPassword}
            onChange={(value) =>
              dispatch({ type: "SET_NEW_PASSWORD", payload: value })
            }
            className="mt-2 w-full text-black text-opacity-50 p-2 rounded-sm flex-1 bg-secondary"
            onClick={() => {}}
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={state.confirmPassword}
            onChange={(value) =>
              dispatch({ type: "SET_CONFIRM_PASSWORD", payload: value })
            }
            className="mt-2 w-full text-black text-opacity-50 p-2 rounded-sm flex-1 bg-secondary"
            onClick={() => {}}
          />
          <div className="flex justify-end gap-5 mt-6">
            <Button
              onClick={() => {
                /* Logic to cancel changes */
              }}
              icon={null}
              className="hover:text-button2"
              description="Cancel"
            />
            <Button
              onClick={handleSaveChanges}
              icon={null}
              className="bg-button2 text-sm text-white py-4 px-10 rounded hover:bg-red-600 transition"
              description="Save Changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
