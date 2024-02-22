import React, { useState } from 'react';
import {
  MDBIcon,
  MDBBtn,
  MDBSideNav,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavMenu,
  MDBSideNavCollapse
} from 'mdb-react-ui-kit';

export default function Hamburger() {
  const [basicOpen, setBasicOpen] = useState(true);
  const [basicCollapse1, setBasicCollapse1] = useState(true);
  const [basicCollapse2, setBasicCollapse2] = useState(false);

  return (
    <>
      <MDBSideNav isOpen={basicOpen} absolute getOpenState={(e) => setBasicOpen(e)}>
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink>
              <MDBIcon far icon='smile' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Link 1</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon='angle-down'
              shouldBeExpanded={basicCollapse1}
              onClick={() => setBasicCollapse1(!basicCollapse1)}
            >
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Category 1</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={basicCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon='angle-down'
              shouldBeExpanded={basicCollapse2}
              onClick={() => setBasicCollapse2(!basicCollapse2)}
            >
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 2
            </MDBSideNavLink>
            <MDBSideNavCollapse show={basicCollapse2}>
              <MDBSideNavLink>Home</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div style={{ padding: '20px' }} className='text-center'>
        <MDBBtn onClick={() => setBasicOpen(!basicOpen)}>
          <MDBIcon fas icon='bars' />
        </MDBBtn>
      </div>
    </>
  );
}