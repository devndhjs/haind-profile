"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // cleanup
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const handleUpload = async () => {
    if (!file) {
      setStatus("Vui lòng chọn ảnh trước.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://140.83.80.129:3000/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setStatus(`✅ Upload thành công: ${res.data.url}`);
    } catch (err: any) {
      setStatus(`❌ Upload thất bại: ${err.response?.data || err.message}`);
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "50px auto",
        padding: 20,
        textAlign: "center",
      }}
    >
      <h2>Upload Ảnh</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const selected = e.target.files?.[0];
          setFile(selected ?? null);
          setStatus("");
        }}
      />

      {previewUrl && (
        <div style={{ marginTop: 20 }}>
          <p>Xem trước:</p>
          <img
            src={previewUrl}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: 300 }}
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        style={{ marginTop: 20, padding: "10px 20px", cursor: "pointer" }}
      >
        Upload
      </button>

      <p style={{ marginTop: 15 }}>{status}</p>
    </div>
  );
}
