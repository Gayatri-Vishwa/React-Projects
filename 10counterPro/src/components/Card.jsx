import React from 'react'


function Card() {
  return (
  
      <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="peacock.jpg" />
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span>The Anti-Patterns </span>
    <span class="flex">
      <span className='lowercase'> No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>

  )
}

export default Card
