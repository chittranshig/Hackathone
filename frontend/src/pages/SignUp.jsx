import { register } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [income, setIncome] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("employmentStatus", employmentStatus);
    formData.append("bankAccountName", bankAccountName),
      formData.append("bankAccountNumber", bankAccountNumber),
      formData.append("bankName", bankName)
      formData.append("profileImage", profileImage);
    role === "Borrower" &&
      (formData.append("income", income));
    dispatch(register(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/dashboard");
    }
  }, [dispatch, loading, isAuthenticated]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImage(file);
    };
  };

  
  return (
    <div className="container ">
      <h2 className="text-center my-4">Sign Up</h2>
      <form onSubmit={handleRegister} >
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Income</label>
          <input
            type="number"
            className="form-control"
            name="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Employment Status</label>
          <select
            className="form-control"
            name="gender"
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
            required
          >
            <option value="">Select Emploment Status</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Retired">Retired</option>
          </select>
        </div>

        <div className="form-group">
          <label>Role</label>
          <select
            className="form-control"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="borrower">Borrower</option>
            <option value="lender">Lender</option>
          </select>
        </div>

        <div className="form-group">
          <label>Bank Account Number</label>
          <input
            type="number"
            className="form-control"
            name="bankAccountNumber"
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Bank Account Name</label>
          <input
            type="text"
            className="form-control"
            name="bankAccountName"
            value={bankAccountName}
            onChange={(e) => setBankAccountName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Bank Name</label>
          <input
            type="text"
            className="form-control"
            name="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
         <div className="form-group">
          <label>Profile Image</label>
          <input
            type="file"
            className="form-control"
            name="profileImage"
            onChange={imageHandler}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3" disabled={loading}> {loading && "Registering..."}
          {!loading && "Register"}</button>
      </form>
    </div>
  );
};

export default SignUp;