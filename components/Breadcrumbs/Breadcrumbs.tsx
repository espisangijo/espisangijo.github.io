import { link } from 'fs';
import React from 'react'

interface Props {
    links : LinkItem[];
}

interface LinkItem {
    title: string;
    url: string;
}

const Breadcrumbs : React.FC<Props> = (props) => {
    const {links} = props

    return (
        <nav aria-label="Breadcrumb">
            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                
                {links.length > 1 &&
                    links.map((link) => {(
                    <li key={link.title}>
                        <div className="flex items-center">
                            <a href={link.url} className="mr-2 text-sm font-medium text-gray-900"> {link.title} </a>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>)})
                }

                <li className="text-sm" key={links[-1].title}>
                    <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600"> Basic Tee 6-Pack </a>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs