


// export const checkValidateData = (email,password)=> {

//     const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//     if(!isEmailValid) return "Email is not Valid";
//     if(!isPasswordValid) return "Password is not valid";

//     return null;

// };

export const checkValidateData = (name = null, email, password, isSignIn) => {
    const isNameValid = /^[a-zA-Z ]{2,}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      email
    );
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password
    );
  
    if (!isNameValid && !isSignIn) {
      return "Name is not valid! Try again.";
    }
    if (!isEmailValid) {
      return "Email is not valid! Try again.";
    }
    if (!isPasswordValid) {
      return "Password is not valid! Try again.";
    }
    return true;
  };
  