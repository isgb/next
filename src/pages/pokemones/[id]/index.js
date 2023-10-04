import Link from 'next/link';
import Image from 'next/image';
import Gato from '../public/gato.jpg'

// <Image src='/gato.jpg' width={400} height={400}/>
const Index = () => {
  return (
    <div>
      <Link href="/chachitos">Ir a chanchitos</Link>
      <p>Chanchito Feliz</p>
      <Image src={Gato} width={400} height={400}/>
    </div>
  )
}

export default Index;