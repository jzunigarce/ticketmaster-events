import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddres] = useState("");
  const [zipCode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const handleClearClick = () => {};
  const handleSubmitForm = () => {};
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <br />
      <label>
        Age
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </label>
      <br />
      <label type="text">
        Address
        <input
          type="text"
          onChange={(e) => setAddres(e.target.value)}
          value={address}
        />
      </label>
      <br />
      <label>
        Zipcode
        <input
          type="text"
          onChange={(e) => setZipcode(e.target.value)}
          value={zipCode}
        />
      </label>
      <br />
      <label>
        Phone
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </label>
      <br />
      <div>
        <button onClick={handleClearClick}>Clear</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
