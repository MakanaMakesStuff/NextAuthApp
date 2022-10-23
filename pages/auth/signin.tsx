import { FormEvent, FormEventHandler, useState } from "react"
import style from "@scss/pages/auth/signin.module.scss"
import { AuthLayout } from "@core/components"
import Head from "next/head"
import { signIn } from "next-auth/react"

interface Props {}

export default function SignInPage(props: Props) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })

  const logIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const res = await signIn("credentials", {
      ...userInfo,
      redirect: false,
    })

    return console.info(res)
  }

  return (
    <>
      <Head>
        <title>Log In - MM</title>
      </Head>

      <div className={style.loginForm}>
        <form method="post" onSubmit={logIn}>
          <h3>Log In</h3>
          <input
            value={userInfo.email}
            type="email"
            placeholder="example@test.com"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                email: e.target.value,
              })
            }
          />
          <input
            value={userInfo.password}
            type="password"
            placeholder="******"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                password: e.target.value,
              })
            }
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  )
}

SignInPage.getLayout = (page: JSX.Element) => {
  return AuthLayout(page as any)
}
