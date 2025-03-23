import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    async getAll(productId) {
        const comments = await request.get(baseUrl);

        // TODO: filter when migrate to collections
        // Client filtering (dont do this)
        const productComments = Object.values(comments).filter(comment => comment.productId === productId);

        return productComments;
    },
    create(email, productId, comment) {
        return request.post(baseUrl, { email, productId, comment });
    }
};
