import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import TagsFilter from './TagsFilter';
import { IoMdClose } from 'react-icons/io';

const TagFilterOffcanvas = ({ show, handleClose, applyFilter }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header>
        <Offcanvas.Title>Filter by Tag</Offcanvas.Title>
        <Button variant="link" onClick={handleClose} style={{ padding: '1px' }}>
          <IoMdClose size={24} />
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <TagsFilter handleClose={handleClose} applyFilter={applyFilter} />{' '}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TagFilterOffcanvas;
