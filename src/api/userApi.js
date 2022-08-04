import axiosClient from "./axiosClient";

const userApi = {
    getAll: () => {
        const url = `/data`;
        return axiosClient.get(url);
    }
}
export default userApi;