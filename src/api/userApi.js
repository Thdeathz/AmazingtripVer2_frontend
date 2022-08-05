import axiosClient from "./axiosClient";

const userApi = {
    getAllUserData: () => {
        const url = `/data`;
        return axiosClient.get(url);
    }
}
export default userApi;