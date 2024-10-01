import React from 'react'

function PublishDetail({date, author}: {date: string, author: string}) {
  return (
    <div>
        <p className='text-sm'>
            By {author} | {date}
        </p>
    </div>
  )
}

export default PublishDetail
