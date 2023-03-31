import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

export default function SocialLinks(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul {...props}>
      <li>
        <Link href="">
          <FiInstagram size={25} />
        </Link>
      </li>
      <li>
        <Link href="">
          <AiFillGithub size={25} />
        </Link>
      </li>
      <li>
        <Link href="">
          <AiFillLinkedin size={25} />
        </Link>
      </li>
      <li>
        <Link href="">
          <FaWhatsapp size={25} />
        </Link>
      </li>
    </ul>
  );
}
