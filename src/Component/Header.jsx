import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className='head'>
     <img src='https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GG7LUz7mK4pxs1bJ26vC0E9EKRdV9A1dChlAbDilxnnf~8HeTTQ5yw5YH6IVOXyL-6VFwB-D726BmhRyRqnUMWPi-xw-fQKeWOMVq35ykDR~VLR0FbnOqnr8~FNVkF9xx1otky2JKqGjbidgDmCkC3jL62UnmteXvF9YQ78QqpMkNCTjV5N-iBLaExtQQB8cBZzrb14~oCzWs6vs7J1k8yH3sNb7wem0hklkVb-BoEH3AtlGegVsQRJaFTtxSxgKVmDH4FRAUXoX8crD4u0-EAWHjcQeC0IHqg1xRpR97LlxrM~lZx0Plvp8-IMcX98zFSC4F9K3kdNFCJhCrwZ8Jg__' 
     width='100px'
     />
      <li className='list1'>
        <ul>Menu</ul>
        <ul>Location</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </li>
      <button>Login</button>
    </div>
  )
}
