import Link from 'next/link'
import { Nav, NavItem, NavLink } from 'react-bootstrap'

export default function HeaderFeaturedNav() {
  return (
    <Nav>
      <NavItem>
        <Link href="/pokemons" passHref legacyBehavior>
          <NavLink className="p-2">Patients</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">Admin</NavLink>
        </Link>
      </NavItem>
      {/* <NavItem>
        <Link href="#" passHref legacyBehavior>
          <NavLink className="p-2">Settings</NavLink>
        </Link>
      </NavItem> */}
    </Nav>
  )
}
