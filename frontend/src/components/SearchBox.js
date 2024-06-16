import { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const SearchBox = ({ handleClose }) => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      handleClose();
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  const buttonStyle = {
    background: '#303f3c',
    border: '1px solid #303f3c',
    fontFamily: 'Julius Sans One',
  };

  const formStyle = {
    borderRadius: '0',
    border: '1px solid #303f3c',
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search items"
        className="mr-sm-2 ml-sm-5 search-input"
        style={formStyle}
      ></FormControl>
      <Button type="submit" className="p-2 mx-2" style={buttonStyle}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
