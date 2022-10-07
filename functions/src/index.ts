import onCreateComment from "./comments/reactive/onCreateComment";
import onUpdateComment from "./comments/reactive/onUpdateComment";
import createComment from "./comments/restful/createComment";
import deleteComment from "./comments/restful/deleteComment";
import getAllComments from "./comments/restful/getComments";
import updateComment from "./comments/restful/updateComment";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//     response.status(200).json({message:"Hello from Firebase!!!"});
// });


exports.createComment = createComment;
exports.getAllComments = getAllComments;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;

exports.onCreateComment = onCreateComment;
exports.onUpdateComment = onUpdateComment;