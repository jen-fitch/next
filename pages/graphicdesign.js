import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../styles/Layout.module.css'
import Page from '../styles/Page.module.css'
import Components from '../styles/Components.module.css'

const menu = [
  { title: 'About', path: '/' },
  { title: 'Websites', path: '/websites' },
  { title: 'Graphic Design', path: '/graphicdesign' },
]

export default function Websites() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Jen's Portfolio - Graphic Design</title>
        <meta name="description" content="Graphic design portfolio list" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <header>
        <div>


        </div>

        <div className={Layout.logo_wrap}>
          <div className={Page.logo}>
            <Image
                src="/images/logo.png"
                alt="Jen Rees Logo"
                width={489*.5}
                height={90*.5}
            />
          </div>
          <div className={Page.about}>
            {' '}
            <Link href="tel:17076316934">
              <a>(707) 631-6934</a>
            </Link>
          </div>
          <div className={Page.about}>
            {' '}
            <Link href="mailto:jen@studio1062.com">
              <a>jen@studio1062.com</a>
            </Link>
          </div>
        </div>
          <div className={Page.nav}>
            {menu.map((item, index) => {
              return (
                  <Link key={index} href={item.path}>
                  <a
                      className={`nav-item ${
                          router.pathname === item.path
                              ? 'active'
                              : ''
                      }`}
                  >
                    {item.title}
                  </a>
                </Link>
              )
            })}
          </div>

      </header>
      <main className={Layout.main}>
        <h1 className={Page.title}>
         Graphic Design
        </h1>




      </main>

      <footer className={Layout.footer}>

      </footer>
    </div>
  )
}
