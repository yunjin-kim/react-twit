import React from 'react'
import { authService } from '../fbase'

export default function Pofile() {
  const onLogOutClick = () => {
    authService.signOut();
  }

  return (
    <div>
      <button onClick={onLogOutClick}>log out</button>
    </div>
  )
}
