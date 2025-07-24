import instance from "./instance";

export const getCategoryById = async id => {
    const {data} = await instance.get(`/categories/${id}`);
    return data;
}