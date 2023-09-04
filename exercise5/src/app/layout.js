
import NavBar from '@/components/NavBar'
import './globals.css'
import styles from "./page.module.css";
import { Inter, Montserrat } from 'next/font/google'
import { UserProvider } from '@/context/UserContext';

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'My First Next App',
  description: 'Create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><NavBar /> 
        
        <main className={styles.main}>
          <UserProvider>{children}</UserProvider>
        </main>
        
        <footer 
        style={
          {background: 'grey', 
          color:'black',
          fontFamily: 'Century Gothic',
          fontWeight: 'bold', 
          height: '50px', 
          textAlign: 'center'}
          }>Copyright &copy; Dee 2023
          </footer>
      </body>
    </html>
  )
}
