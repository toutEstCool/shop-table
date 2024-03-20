import Link from 'next/link'

const Logo = () => (
  <Link className='logo__img' href='/'>
    <img className='logo__img' src='/img/logo.svg' alt='Yangeer Store Logo' />
  </Link>
)

export default Logo
