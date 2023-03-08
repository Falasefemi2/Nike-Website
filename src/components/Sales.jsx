import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ({endpoint}) => {

  return (
    <>
    <div>
        <Title title={endpoint.title} />
        <div>
            {endpoint.items?.map((item, i) => (
                <Item {...item} key={i} />
            ))}
        </div>
    </div>
    </>
  )
}

export default Sales