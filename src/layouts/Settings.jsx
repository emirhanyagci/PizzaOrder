import SectionTitle from "../components/SectionTitle";
import SettingsInput from "../components/SettingsInput";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
function Settings() {
  const {
    updateDisplayName,
    updateEmailAddress,
    updatePassword,
    updatePhotoUrl,
  } = useAuth();
  const state = useSelector((state) => state.user);
  return (
    <>
      <SectionTitle>Settings</SectionTitle>
      <div className="space-y-3">
        <SettingsInput
          id="name"
          placeholder={state.name || "Set Name"}
          label="Your Name"
          onClickHandler={(input) => {
            updateDisplayName(input);
          }}
        />
        <hr />
        <SettingsInput
          id="email"
          placeholder={state.email}
          label="Your Email"
          onClickHandler={(input) => {
            updateEmailAddress(input);
          }}
        />
        <hr />
        <SettingsInput
          id="password"
          placeholder="blabla"
          label="Your Password"
          onClickHandler={(input) => {
            updatePassword(input);
          }}
          type="password"
        />
        <hr />
        <SettingsInput
          id="image"
          placeholder={
            state.photoURL || "https://emirhanyagci.com/images/picture.jpg"
          }
          label="Your Image"
          onClickHandler={(input) => {
            updatePhotoUrl(input);
          }}
        />
      </div>
    </>
  );
}

export default Settings;
