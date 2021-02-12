import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'

export default function Room({room}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Room #{room.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Room #{room.id}
          <br />
          {room.name}
        </h1>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { rid } = context.params
  const room = await axios.get('http://localhost:3000/api/rooms/get_room_info', { params: { rid } }).then(res => res.data)

  console.log(room)

  return {
    props: {
      room
    }
  }
}
