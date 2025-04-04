import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropZone = () => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    multiple: false
  });

  return (
    <div className="border-t border-gray-200 p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative">
            <img src={preview} alt="Preview" className="max-h-32 mx-auto" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreview(null);
              }}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
            >
              ×
            </button>
          </div>
        ) : (
          <p className="text-gray-500">
            {isDragActive ? 
              "Drop the image here" : 
              "Drag & drop an image here, or click to select"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageDropZone;
