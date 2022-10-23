import { Header, Footer } from "@core/components"
import style from "@scss/components/Layouts/Default.module.scss"

export default function DefaultLayout({ children }) {
  return (
    <div className={style.main}>
      <Header />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  )
}
