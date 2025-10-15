import React from 'react';
import './file.css';
import { FaFolderMinus } from "react-icons/fa6";
import { MdInsertDriveFile } from "react-icons/md";

const File = ({file}) => {
  return (
    <div className='file'>
      {file.type === 'dir' ? <FaFolderMinus className='file__img' style={{ height: '40px', width: '40px'}}/> : <MdInsertDriveFile  style={{ height: '40px', width: '40px'}} className='file__img'/>}
      <div className="file__name">{file.name}</div>
      <div className="file__date">{file.date.slice(0,10)}</div>
      <div className="file__size">{file.size}</div>
    </div>
  );
};

export default File;