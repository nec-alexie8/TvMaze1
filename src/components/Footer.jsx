import {Container} from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <Container fluid className='bg-secondary-subtle p-4'>
        <div className='d-md-flex  justify-content-between align-items-center'>
            <a href='https://www.tvmaze.com/' className='text-black fs-5'>TVMaze.com</a>
            <AiFillGithub size='25px' />

        </div>

    </Container>
  )
}
