import { Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <h1>Я навбар</h1>
      <Outlet />
    </>
  )
}