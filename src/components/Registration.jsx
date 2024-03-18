import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [termsConditions, setTermsConditions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name: name, email: email, password: password });
    if (isChecked) {
      setIsSubmit(true);
    } else {
      setTermsConditions(true);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-green-500">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-green-300 w-2/3 lg:w-2/5 rounded-lg p-8"
      >
        <h1 className="text-4xl mb-6 text-green-500 text-center">
          SignUp Form
        </h1>
        <label className="mb-2 text-lg">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter you name"
          className="py-2 px-1 border-2 border-solid border-green-400 w-full text-lg rounded-lg mb-3"
          required
        />
        <label className="mb-2 text-lg">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter you email"
          className="py-2 px-1 border-2 border-solid border-green-400 w-full text-lg rounded-lg mb-3"
          required
        />
        <label className="mb-2 text-lg">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter you password"
          className="py-2 px-1 border-2 border-solid border-green-400 w-full text-lg rounded-lg mb-3"
          required
        />
        <input
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
        />{" "}
        Do you agree with terms and conditions?
        <button className=" bg-green-600 text-xl h-12 w-20 text-white rounded-lg float-end">
          Sign Up
        </button>
        {termsConditions && (
          <p className="text-xl mt-5">
            Without agree terms and conditions we can not allow your
            registration.
          </p>
        )}
      </form>
      {isSubmit && (
        <div className="fixed top-0 h-screen w-full flex justify-center items-center bg-green-500">
          <div className="bg-green-300 w-2/3 lg:w-2/5 rounded-lg p-8 space-y-3">
            <h1 className="text-center text-3xl text-green-800">
              Your Registration Successfully Done ✅
            </h1>
            <div className="text-xl space-y-4 ml-10 text-green-700">
              <p>Name: {name}</p>
              <p>Email: {email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
