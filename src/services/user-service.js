
import { myAxios } from "./helper";


export const signUp = (user) => {

    return myAxios
        .post('/user/signup', user)
        .then((response) => {

            console.log(response);
            return response.data

        })
        .catch((error) => {
            console.log(error.response.data);
            return error.response.data;
        }
        )
}



export const signIn = (user) => {

    return myAxios
        .post('/auth/login', user)
        .then((response) => {

            console.log(response.data);
            return response.data

        })
        .catch((error) => {
            console.log(error.response);
            return error.response.data;
        }
        )
}


export const signout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();
    }
};


export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

export const saveUser = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("signup", JSON.stringify(data));
        next();
    }
};
export const isUserSaved = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("signup")) {
        return JSON.parse(localStorage.getItem("signup"));
    } else {
        return false;
    }
};

export const isAutheticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
};



export const addMember = (user, token, userId) => {
console.log(token)
    return myAxios
        .post(`/${userId}/dashboard/add/members`, user, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {

            console.log(response.data);
            return response.data

        })
        .catch((error) => {
            console.log(error.response.data);
            return error.response.data;
        }
        )

}



export const getAllMember = (id, token) => {
    return myAxios.get(`/${id}/dashboard/getAllmembers`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
        console.log(response);
        return response.data
    })
        .catch((error) => {
            console.log(error.response.data)
            return error.response.data
        })
}


export const getUser = (id, token) => {
    return myAxios
        .get(`/${id}/dashboard/getpid`, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}

export const getProfile = (id, token, pid) => {
    return myAxios
        .get(`/${id}/dashboard/getMember/${pid}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}

export const createProfile = (id, user) => {

    return myAxios
        .post(`${id}/dashboard/create`, user)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.log(error.response.data)
            return error.response.data
        })

}


export const getDashData=(userId,token)=>
{
    return myAxios
        .get(`/${userId}/dashboard/dashdata`,{ headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {

            console.log(response.data);
            return response.data

        })
        .catch((error) => {
            console.log(error.response);
            return error.response.data;
        }
        )

}

export const saveData = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("dash", JSON.stringify(data));
        next();
    }
};
export const isDataSaved = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("dash")) {
        return JSON.parse(localStorage.getItem("dash"));
    } else {
        return false;
    }
};

export const updatePaitentByUser=(id,details,token)=>{
    return myAxios.put(`/${id}/dashboard/update`,details,{headers:{"Authorization":`Bearer ${token}`}})
        .then((response)=>{
        return response.data;
    }).catch((error)=>{
        return error.response.data;
    })
}