import React, { useState, useCallback, useRef } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/upload");
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }
    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    console.error(`Authentication request failed: ${error.message}`);
    throw error; // Re-throw the error to be caught by IKContext
  }
};

const Upload = ({ setImg }) => {
  const ikUploadRef = useRef(null)
  const [isUploading, setIsUploading] = useState(false);

  const onError = useCallback((err) => {
    console.error("Upload Error", err);
    setIsUploading(false);
  }, []);

  const onSuccess = useCallback((res) => {
    console.log("Upload Success", res);
    setIsUploading(false);
    setImg((prev) => ({ ...prev, isLoading: false, dbData: res }));
  }, []);

  const onUploadProgress = useCallback((progress) => {
    console.log("Upload Progress", progress);
  }, []);

  const onUploadStart = useCallback((evt) => {
    console.log("Upload Start", evt);
    setIsUploading(true);
    setImg((prev) => ({ ...prev, isLoading: true }));
  }, []);

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}>
      
      {!isUploading && (
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          useUniqueFileName={true}
          onUploadProgress={onUploadProgress}
          onUploadStart={onUploadStart}
          style={{ display: "none" }}
          ref = {ikUploadRef}
        />
      )}
      {isUploading && <p>Uploading in progress...</p>}
      {
        <label onClick={() => ikUploadRef.current.click()}>
          <img src="/attachment.png" alt="img" />
        </label>
      }
    </IKContext>
  );
};

export default Upload;
