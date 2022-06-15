import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

import classNames from 'classnames';
interface Props {
  title: string;
  subtitle: string;
  content: string;
  date?: string;
}

const Card: React.FC<Props> = (props) => {
  const {title, subtitle, content, date} = props;
  return (
    <div className={classNames(" w-96 border-gray-100 border-2 rounded-lg bg-white rounded-b p-4 flex flex-col justify-between leading-normal", {
      "mx-auto": title !== ""
    })}>
        <div className="mb-8">
          
        <p className="text-xs font-bold text-gray-400 flex items-center">
            {subtitle.toUpperCase()}
        </p>
        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
        </div>
    </div>
  )
}

export default Card;