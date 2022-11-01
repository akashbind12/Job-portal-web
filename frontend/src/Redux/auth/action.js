import axios from "axios";
export const actionTypes = {
  AUTH_LOADING: "AUTH_LOADING",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAILURE: "AUTH_FAILURE",
  AUTH_REGISTER: "AUTH_REGISTER",
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


// REGISTER

export const register = (data) => async (dispatch) => {
    dispatch(register_loading());
    try {
        let res = await axios.post("http://localhost:7000/api/register", data);
        console.log(res.data)
        dispatch(register_success())
    } catch (error) {
       dispatch(register_failure());
    }
  };


// axios.post("http://localhost:7000/api/register", form)
        //     .then((res) => {
        //     console.log(res)
        //     navigate("/login")
        //     }).catch((err) => {
        //     console.log(err)
        //     alert("Fill all the detail correctly")
        // })


//   LOGIN
export const login = (data) => async (dispatch) => {

  dispatch(login_loading())
    try {
      const res = await axios.post("http://localhost:7000/api/login", data);
      console.log(res.data)
       dispatch(login_success(res.data));
    } catch (error) {
       dispatch(login_failure());
    }
};
  

// axios.post("http://localhost:7000/api/login", form)
        //     .then((res) => {
        //         console.log(res)
        //         localStorage.setItem("token",res.data.token)
        //         localStorage.setItem("type",res.data.type)  
        //         localStorage.setItem("email",res.data.email) 
        //         localStorage.setItem("name",res.data.name) 
        //         // navigate("/",{replace:true});
        //     }).catch((err) => {
        //         console.log(err)
        //         alert("Fill all the detail correctly")
        // })