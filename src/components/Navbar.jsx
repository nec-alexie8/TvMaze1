import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import{ FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'


export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()


  console.log(searchQuery)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchQuery) {
      navigate(`search/?q=${searchQuery}`)
    }
  }

  return (
    <>
    <Container fluid className='p-4 d-flex justify-content-between align-items-center bgcolor'>

        <div className='d-flex gap-3 align-items-center'>
            <Link to='/' className='display-6 text-white fw-bold'>TVMAZE</Link>
            <span className='text-white-50'>TV Shows</span>
        </div>

        <FiSearch type='button' size='30px' color='ffff' onClick={()=> setShowSearch(!showSearch)}/>

    </Container>

    {showSearch && (
    <form className='position-relative ma-auto border' onSubmit={handleSubmit}>
      <input type='text' placeholder='Search tv...' 
      value={searchQuery} 
      onChange={(e) => setSearchQuery(e.target.value)}/>
      <AiFillCloseCircle
      type='button'
      className='position-absolute top-50 end-0 translate-middle'
      onClick={() => {
        setShowSearch(!showSearch)
        setSearchQuery('')
      }}
      />
    </form>
    )}
    </>
  )
}
