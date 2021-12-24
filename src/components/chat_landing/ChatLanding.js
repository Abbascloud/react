import { useSelector } from "react-redux";

export const ChatLanding = () => {
  const { ...profile } = useSelector((state) => {
    return state.profile;
  });

  return (
    <div>
      <h1>Hello {profile.firstName}</h1>
      <p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
    </div>
  );
};
