import db from "../../config/firestore.config";
import createRestfulFunction, {Methods} from "../../utils/helpers";
import { Comment } from "../models/comments";


const createComment = createRestfulFunction({
    method: Methods.POST,
    callback: async(req, res) => {
        try{
            const comment: Comment = req.body;

            const ref = await db.collection("comments").add(comment);
            const doc = await ref.get();

            res.status(200).json({
                message:"Comment created",
                data:{
                    comment: doc.data()
                }
            });
        } catch(err){
            res.status(500).json({
                message:"ERROR",
                err
            });
        }
    }
});

export default createComment;