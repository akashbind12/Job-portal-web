import axios from "axios";
export const actionTypes = {
  AUTH_LOADING: "AUTH_LOADING",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAILURE: "AUTH_FAILURE",
  AUTH_REGISTER: "AUTH_REGISTER",
  AUTH_LOGOUT: " AUTH_LOGOUT",
};

// REGISTER ACTION
export const register_loading = () => {
  return {
    type: actionTypes.AUTH_LOADING,
  };
};
export const register_success = () => {
  return {
    type: actionTypes.AUTH_REGISTER,
  };
};
export const register_failure = () => {
  return {
    type: actionTypes.AUTH_FAILURE,
  };
};



// LOGIN ACTION
export const login_loading = () => {
  return {
    type: actionTypes.AUTH_LOADING,
  };
};
export const login_success = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: data,
  };
};
export const login_failure = () => {
  return {
    type: actionTypes.AUTH_FAILURE,
  };
};

/// action logout
export const logout_success = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};


// REGISTER

export const register = (data) => async (dispatch) => {
    dispatch(register_loading());
    try {
        let res = await axios.post("http://localhost:7000/api/register", data);
        console.log(res.data)
        dispatch(register_success())
    } catch (error) {
      console.log(error)
       alert("something went wrong")
       dispatch(register_failure());
    }
  };


//   LOGIN
export const login = (data) => async (dispatch) => {

  dispatch(login_loading())
    try {
      const res = await axios.post("http://localhost:7000/api/login", data);
      console.log(res.data)
      localStorage.setItem("data", JSON.stringify(res.data));
      localStorage.setItem("auth", true);
       dispatch(login_success(res.data));
    } catch (error) {
       dispatch(login_failure());
       alert("wrong details")
    }
};


export const logout = ()  => async (dispatch)  => {
      localStorage.removeItem("data");
      localStorage.removeItem("auth")
      // localStorage.removeItem("mytime");
      console.log("logout succefully")
      dispatch(logout_success())
};
  
