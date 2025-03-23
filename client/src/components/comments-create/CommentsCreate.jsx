import commentService from "../../services/commentService";

export default function CommentsCreate({
    email,
    productId,
    onCreate,
}) {
    const commentAction = async (formData) => {
        const comment = formData.get('comment');
        console.log(email);
        console.log(comment);

        const createdComment = await commentService.create(email, productId, comment);

        onCreate(createdComment);
    }

    return (
        <div className="mb-3">
            <label htmlFor="inputmessage">Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea className="form-control mt-1" id="comment" name="comment" placeholder="Comment......" rows="4"></textarea>
                <div className="col d-grid">
                    <button type="submit" className="btn btn-success btn-lg" value="Add Comment">Add Comment </button>
                </div>
            </form>
        </div>
    );
}



