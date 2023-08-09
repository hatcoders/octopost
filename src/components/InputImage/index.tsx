import React, { useRef } from 'react';

import scss from './input.module.scss';

const InputImage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log('dados imagem', selectedFile);
    }
  };

  return (
    <div>

      <input className={scss.hiden}
        type="file"
        ref={inputRef}        
        onChange={handleInputChange}
      />
      <button className={scss.image} onClick={() => inputRef.current?.click()}>
        Selecionar Imagem
      </button>
    </div>
  );
};

export default InputImage;
