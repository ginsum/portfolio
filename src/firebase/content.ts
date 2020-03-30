import "firebase/firestore";
import { db } from "./index";
import { NewContent, OnePost } from "../components/shared/interface";

const postRef = db.collection("post");

export const handleNewPost = (
  userId: string,
  newContent: NewContent,
  callback: any,
  postId: string
) => {
  const catagoryPostRef = postRef.doc(newContent.catagory);
  catagoryPostRef
    .collection(userId)
    .doc(postId)
    .set(newContent)
    .then(() => callback())
    .catch(error => console.log(error));
};

export const getPostList = (catagory: string, callback: any) => {
  const catagoryPostRef = postRef
    .doc(catagory)
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2");
  let postList: any[] = [];
  catagoryPostRef.get().then(snapshot => {
    snapshot.forEach(doc => {
      let onePost: OnePost = {};
      onePost[doc.id] = doc.data();
      postList.push(onePost);
    });
    callback(postList);
  });
};

export const getPostContentById = (
  catagory: string,
  id: string,
  callback: any
) => {
  const catagoryPostRef = postRef
    .doc(catagory)
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2")
    .doc(id);
  catagoryPostRef.get().then(snapshot => {
    console.log(snapshot.data());
    const data = snapshot.data();
    callback(data);
  });
};

export const deletePostContentById = (
  catagory: string,
  id: string,
  callback: any
) => {
  const catagoryPostRef = postRef
    .doc(catagory)
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2")
    .doc(id);
  catagoryPostRef
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
      callback();
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
};
