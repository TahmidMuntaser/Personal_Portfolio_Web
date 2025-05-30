import React from "react";
import Image from 'next/image';

const WorkCard = ({id, title, description, imageUrl, link }) => {
    return(
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden group shadow-lg transition duration-300 hover:scale-[1.02] w-84 h-80">
            <Image
                src={imageUrl}
                alt={title}
                width={256}
                height={160}
                className="object-cover w-full h-full"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
                priority
            />
        </div>
    )
}
export default WorkCard;