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
  const catagoryPostRef = postRef.doc(newContent.section);
  catagoryPostRef
    .collection(userId)
    .doc(postId)
    .set(newContent)
    .then(() => callback())
    .catch(error => console.log(error));
};

export const getPostList = (section: string, callback: any) => {
  const sectionPostRef = postRef
    .doc(section)
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2");
  let postList: any[] = [];
  sectionPostRef.get().then(snapshot => {
    snapshot.forEach(doc => {
      let onePost: OnePost = {};
      onePost[doc.id] = doc.data();
      postList.push(onePost);
    });
    callback(postList);
  });
};

export const getPostContentById = (
  section: string,
  id: string,
  callback: any
) => {
  const sectionPostRef = postRef
    .doc(section)
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2")
    .doc(id);
  sectionPostRef.get().then(snapshot => {
    console.log(snapshot.data());
    const data = snapshot.data();
    callback(data);
  });
};

export const deletePostContentById = (
  section: string,
  id: string,
  callback: any
) => {
  const sectionPostRef = postRef
    .doc(section)
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2")
    .doc(id);
  sectionPostRef
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
      callback();
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
};
