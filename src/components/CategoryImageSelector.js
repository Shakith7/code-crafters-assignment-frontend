import React, { useState } from 'react';

const CategoryImageSelector = ({ categoryImages, setImage }) => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImage(image);
  };

  return (
    <div className="space-y-6">
      {Object.keys(categoryImages).map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="grid grid-cols-3 gap-6">
            {categoryImages[category].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={category}
                className={`w-full h-32 object-cover cursor-pointer rounded-lg border-2 ${
                  selectedImage === image ? 'border-purple-500' : 'border-transparent'
                } hover:border-purple-500 transition-all duration-300`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryImageSelector;
