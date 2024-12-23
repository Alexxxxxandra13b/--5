import React, { useState } from 'react';

function Eight() {
  const [title, setTitle] = useState('Редактировать заголовок');

  return (
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}

export default Eight;