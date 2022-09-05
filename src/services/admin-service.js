
import { myAxios } from "./helper";


export const adminsignUp = (user) => {

    return myAxios
        .post('/admin/signup', user)
        .then((response) => {

           
            return response.data

        })
        .catch((error) => {
            
            return error.response.data;
        }
        )
}

export const adminsignIn = (user) => {

    return myAxios
        .post('/admin/signin', user)
        .then((response) => {

           
            return response.data

        })
        .catch((error) => {
           
            return error.response.data;
        }
        )
}


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
export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};


export const getAdmin = (id, token) => {
    return myAxios
        .get(`/${id}/dashboard/getpid`, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}

export const adminaddMember=(user)=>{
    return myAxios
         .post(`/admin/addMember`,user)
         .then((response)=>{
             return response.data
         })
         .catch((error)=>{
             return error.response.data
         })
}
export const getAllmembers=()=>{
    return myAxios
         .get('/admin/getAllmembers')
         .then((response)=>{
             return response.data
         })
         .catch((error)=>{
             return error.response.data
         })
}

export const getadminProfile=(id)=>{
    return myAxios
         .get(`/admin/getdetails/${id}`)
         .then((response)=>{
             console.log(response)
             return response.data
         })
         .catch((error)=>{
             return error.response.data
         })
}

export const getDashData=(userId)=>{
    return myAxios
         .get(`/admin/dashdata/${userId}`)
         .then((response)=>{
             return response.data
         })
         .catch((error)=>{
             return error.response.data
         })
}



export const saveAdmin = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("admin", JSON.stringify(data));
        next();
    }
};
export const isAdminSaved = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("admin")) {
        return JSON.parse(localStorage.getItem("admin"));
    } else {
        return false;
    }
};


export const getPaitent = (pid) => {
    return myAxios
        .get(`/admin/getpaitent/${pid}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.response.data
        })
}

export const updatePaitent=(pid,user)=>{
    return myAxios
         .put(`/admin/update/${pid}`,user)
         .then((response)=>{
             return response.data
         })
         .catch((error)=>{
             return error.response.data
         })
}

export const addadminDetails=(id,user)=>{
    return myAxios
         .post(`/admin/adddetails/${id}`,user)
         .then((response)=>{
             return response.data;
         })
         .catch((error)=>{
             return error.response.data;
         })



         
}


export const updateData=(id,user)=>{
    return myAxios
         .put(`/admin/updatedetails/${id}`,user)
         .then((response)=>{
             console.log(response)
             return response.data;
         }).catch((err)=>{
             console.log(err.response)
             return err.response.data
         })

}

export const getChartData=()=>{
    return myAxios
         .get("/admin/getchartdata")
         .then((response)=>{return response.data})
         .catch((error)=>{
             return error.response.data
         })
}