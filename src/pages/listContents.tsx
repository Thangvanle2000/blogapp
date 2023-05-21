import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export interface SaveContentsProps {
    
}
export default function SaveContents (props: SaveContentsProps) {

  return (
    <div className="border rounded-md border-gray-300 bg-gray-200 flex justify-between">
      <div className="p-5 flex flex-col">
        <p className="text-xl font-bold">Reading List</p>
        <div className="flex gap-2 items-center">
          <button className="border border-black rounded-full px-2 py-1">View list</button>
          <FontAwesomeIcon icon={faLock} className="text-slate-500" size="xs"/>
        </div>
      </div>
    </div>
  );
}