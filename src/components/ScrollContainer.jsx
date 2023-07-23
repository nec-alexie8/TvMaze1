

export default function ScrollContainer({children, heading}) {
  
    return (
    <div className='m-3'>
     <h1 className='fs-4 colorText mb-4'>{heading}</h1>
     <div className='d-flex gap-4 overflow-x-scroll  scrollbody'>{children}</div>
     

    </div>
    )
  
}
