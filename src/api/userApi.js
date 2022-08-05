import axiosClient from "./axiosClient";

const userApi = {
    getAllUserData: () => {
        const url = `/data`;
        return axiosClient.get(url);
    },
    login: (data) => {
        const url = `/login`;
        return axiosClient.post(url, data);
    }
}
export default userApi;