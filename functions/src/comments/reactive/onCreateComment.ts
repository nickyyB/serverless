import * as functions from "firebase-functions";
import { Comment } from "../models/comments";

var censure = ["bla", "hell"];

const onCreateComment = functions.firestore
  .document("comments/{commentId}")
  .onCreate((snapshot, context) => {
    const comment = <Comment>snapshot.data() ;
    //console.log("Created new todo", todo);

    censure.forEach(word=> {
        if(comment.text.includes(word)){

            var newWord = "";
            for(let i=0; i<word.length; i++){
                newWord += "*";
            }

            comment.text = comment.text.replace(new RegExp(word,"g"), newWord);
            console.log(comment.text);


            return snapshot.ref.update({text:comment.text});
        }
        return null;
    });

    return null;
  });

export default onCreateComment;