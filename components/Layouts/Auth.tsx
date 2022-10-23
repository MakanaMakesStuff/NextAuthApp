
import style from "@scss/components/Layouts/Auth.module.scss"

export default function AuthLayout({ children }) {
  return (
	<div className={style.main}>
	  <main className="layout-content">{children}</main>
	</div>
  )
}