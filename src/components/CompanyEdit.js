import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const CompanyEdit = () => {
  const states = {
    companyName: {
      value: "",
      required: true,
      type: "input",
      Placeholder: "Company Name",
    },
    userName: {
      value: "",
      required: true,
      type: "input",
      Placeholder: "Username",
    },
    email: {
      value: "",
      required: true,
      type: "input",
      Placeholder: "Email",
    },
    phone: {
      value: "",
      required: true,
      type: "input",
      Placeholder: "Phone",
    },
    website: {
      value: "",
      required: true,
      type: "input",
      Placeholder: "Website",
    },
    aboutCompany: {
      value: "",
      required: true,
      type: "input",
      Placeholder: "About Your Company",
    },
  };

  const [resMessage, setResMessage] = useState("");
  const [formState, setFormState] = useState(states);

  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  // Handle fields change
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.value.companyName]: e.target.value,
    });
  }

  function handleSubmit(e) {
    updateCompany(formState)
      .then(setResMessage("Your profile is successfully updated"))
      .catch((error) => {
        setResMessage(error.message);
      });
  }

  return (
    <>
        {loggedInUser ?
        <>
      <ProfileContainer>
        <Heading>Edit Company Profile</Heading>

        <FormDiv>
          <InputLabel type="text">Company Name</InputLabel>
          <ProfileInput
            placeholder="Company Name"
            name="companyName"
            value={formState.companyName}
            onChange={handleChange}
          >
            {" "}
          </ProfileInput>
          {/* Edit company name here */}

          <InputLabel type="text">Username</InputLabel>
          <ProfileInput
            placeholder="Username"
            name="username"
            value={formState.username}
            onChange={handleChange}
          ></ProfileInput>
          {/* Edit company name here */}

          <InputLabel type="text">Email</InputLabel>
          <ProfileInput
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          ></ProfileInput>
          {/* Edit company name here */}

          <InputLabel type="text">Phone Number</InputLabel>
          <ProfileInput
            placeholder="Phone"
            name="phone"
            value={formState.phoneNumber}
            onChange={handleChange}
          ></ProfileInput>
          {/* Edit company name here */}

          <InputLabel type="text">Website</InputLabel>
          <ProfileInput
            placeholder="Website"
            name="website"
            value={formState.website}
            onChange={handleChange}
          ></ProfileInput>
          {/* Edit company name here */}
        </FormDiv>

        <FormDiv>
          <InputLabel type="text">About Your Company:</InputLabel>
          <ProfileInputlong
            placeholder="About company"
            name="about company"
            value={formState.aboutCompany}
            onChange={handleChange}
          ></ProfileInputlong>
          {/* Edit company name here */}
        </FormDiv>

        <InputButton onClick={handleSubmit}>Save</InputButton>
        <div style={{ margin: "2rem" }}> </div>
      </ProfileContainer>
      </> : <> </>
      }
    </>
  );
};

export default CompanyEdit;
