import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function Input() {
  const { data: session } = useSession();
  console.log(session);
  // the tweet
  const [input, setInput] = useState("");
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // send the post to firestore(db collection in firebase )
  const sendPost = async () => {
    // loading when sending data
    if (loading) return;
    setLoading(true);

    // addDoc, collection-> built in
    // db-> imported from firebase.js
    // posts is the collection we are creating and send to firebase
    // this is doc reference, every doc will be like this only
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      text: input,
      userImg: session.user.image,
      // serverTimestamp -> built in firebase
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });

    // make ref of image to upload -> where to upload (URL)
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    // if there is a selected File
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setInput("");
    setSelectedFile(null);
    setLoading(false);
  };

  // sending user posted image to firestore
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  // have to implement fxn sending image

  return (
    <>
      {session && (
        <div className={`${loading && "animate-pulse"}`}>
          <div className="flex  border-b border-gray-200 p-3 space-x-3">
            <div className="">
              <img
                src={session.user.image}
                alt="user-img"
                className="h-10 w-11 rounded-full cursor-pointer hover:brightness-50"
              />
            </div>
            <div className="w-full divide-y divide-gray-200">
              <div className="">
                <textarea
                  className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                  rows="2"
                  placeholder="What's happening?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                ></textarea>
                {selectedFile && (
                  <div className="relative">
                    <XIcon
                      onClick={() => setSelectedFile(null)}
                      className="border h-7 text-grey absolute cursor-pointer shadow-md border-white m-1 rounded-full"
                    />
                    <img src={selectedFile} alt="selected-img" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between pt-2.5">
                <div className="flex">
                  <div onClick={() => filePickerRef.current.click()}>
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <input
                      type="file"
                      hidden
                      ref={filePickerRef}
                      onChange={addImageToPost}
                    />
                  </div>
                  <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                </div>
                <button
                  disabled={!input.trim()}
                  onClick={sendPost}
                  className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
