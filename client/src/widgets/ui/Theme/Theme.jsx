import { NavLink } from "react-router-dom";

export default function Theme({ theme } ) {
  return (
      <h3>
        <NavLink to={`/question/${theme.id}`}><p><span>{theme.id}. </span>{theme.title}</p></NavLink>
      </h3>
  )
}