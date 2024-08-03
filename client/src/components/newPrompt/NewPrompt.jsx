import React, { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../uploads/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";
const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });

  const endref = useRef(null);
  useEffect(() => {
    endref.current.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, img.dbData]);

  const add = async (text) => {
    setQuestion(text);

    const result = await model.generateContent(text);
    const response = await result.response;
    const answer = response.text();
    setAnswer(answer);
    // console.log(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    add(text);
  };

  return (
    <>
      {img.isLoading && <div>loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: "380px" }]}
        />
      )}
      {question && <div className="message user"> {question} </div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div className="endChat" ref={endref}></div>
      <div className="newPrompt">
        <form className="newForm" onSubmit={handleSubmit}>
          {/* <label htmlFor="file">
                <img src="/attachment.png" alt="attachment" />
            </label> */}
          <Upload setImg={setImg}></Upload>
          <input type="file" id="file" multiple={false} hidden />
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="arrow" />
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPrompt;
