import { useEffect, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [phoneType, setPhoneType] = useState("");

  const [staff, setStaff] = useState("");

  const [bio, setBio] = useState("");

  const [signup, setSignUp] = useState(false);

  const [errors, setErrors] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let array = [];

    if (name === "") {
      array.push("Name must be present!!");
    }
    if (email === "" || !email.includes("@")) {
      array.push("Email must be present!!");
    }
    if (phone === "" || phone.length !== 9) {
      array.push("Phone must be present and 9 digits long");
    }
    if (phoneType === "" || phone === "") {
      array.push("Phone or phone type must be present!!");
    }
    if (bio === "" || bio.length > 280) {
      array.push("Bio should be under 280 characters.");
    }
    setErrors(array);
  }, [name, email, phone, phoneType, bio]);

  const handleSubmit = function (e) {
    e.preventDefault();
    let coolObject = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      signup,
      date: new Date(),
    };
    setSubmitted(true);

    if (errors.length > 0) {
      console.log("did not submit");
      return;
    }
    console.log(coolObject);
  };

  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(phoneType);
  // console.log(staff);
  // console.log(bio);
  // console.log(signup);
  console.log(errors);
  return (
    <>
      <ul>
        {submitted && errors.length !== 0 ? (
          <div id="errors">
            {errors.map((error) => {
              return <li>{error}</li>;
            })}
          </div>
        ) : null}
      </ul>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "30vw" }}
      >
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          type="number"
          placeholder="999999999"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="phonetype"></label>
        <select
          id="phonetype"
          value={phoneType}
          onChange={(e) => {
            setPhoneType(e.target.value);
          }}
        >
          <option disabled value="">
            Select an option{" "}
          </option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
        <label htmlFor="instructor">Instructor: </label>
        <input
          id="instructor"
          type="radio"
          name="staff"
          value="instructor"
          onChange={(e) => {
            setStaff(e.target.value);
          }}
        />
        <label htmlFor="student">Student: </label>
        <input
          id="student"
          type="radio"
          name="staff"
          value="student"
          onChange={(e) => {
            setStaff(e.target.value);
          }}
        />
        <label htmlFor="bio">Bio: </label>
        <textarea
          id="bio"
          name="bio"
          cols="30"
          rows="10"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        ></textarea>
        <label htmlFor="signup">SignUp: </label>
        <input
          id="signup"
          type="checkbox"
          value="signup"
          defaultChecked={signup}
          onChange={() => {
            setSignUp(!signup);
          }}
        />
        <input type="submit" value="Submit Form" />
      </form>
    </>
  );
}
