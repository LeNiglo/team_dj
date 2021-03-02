import styles from '../styles/Home.module.scss'
import Header from './partials/header'
import Footer from './partials/footer'

import { useSession, signIn, signOut } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()

  // TODO: https://next-auth.js.org/configuration/pages

  return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Zir Play !</a>
        </h1>

        { session
        ? <>Signed in as {session.user.email} <br/><button onClick={() => signOut()}>Sign out</button></>
        : <>Not signed in <br/><button onClick={() => signIn()}>Sign in</button></>
        }
      </main>
  )
}
