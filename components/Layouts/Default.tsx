import { Header, Footer } from "@core/components"
import style from "@styles/components/DefaultLayout.module.scss"

export default function DefaultLayout({ children }) {
  return (
    <div className={style.main}>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}
