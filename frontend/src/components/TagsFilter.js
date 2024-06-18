import React, { useEffect, useState } from 'react';
import { useGetTagsQuery } from '../slices/productsApiSlice';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 5px;
  ${(props) =>
    props.selected &&
    `
    background-color: #303f3c !important;
    color: #fff9f3 !important;
    border-color: #303f3c !important;
  `}
`;

const ApplyButton = styled(Button)`
  margin-right: 5px;
  background-color: #303f3c !important;
  color: #fff9f3 !important;
  border-color: #303f3c !important;
`;

const TagsFilter = ({ handleClose, applyFilter }) => {
  const navigate = useNavigate();
  const { tag: urlTag } = useParams();
  const [selectedTag, setSelectedTag] = useState(urlTag || '');
  const { data: tags, isLoading, error } = useGetTagsQuery();

  useEffect(() => {
    if (urlTag) {
      setSelectedTag(urlTag);
    }
  }, [urlTag]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  const handleApply = () => {
    if (selectedTag) {
      navigate(`/products/tags/${selectedTag}`);
    } else {
      navigate(`/products`);
    }
    applyFilter();
    handleClose();
  };

  const handleClear = () => {
    setSelectedTag('');
    navigate(`/products`);
    applyFilter();
    handleClose();
  };

  return (
    <div>
      <Form.Label>Filter by Tag</Form.Label>
      <div className="tags-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading tags</div>
        ) : (
          tags.map((tag) => (
            <StyledButton
              key={tag}
              variant="outline-primary"
              className={`tag-button ${tag === selectedTag ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
              selected={tag === selectedTag}
            >
              {tag}
            </StyledButton>
          ))
        )}
      </div>
      <ApplyButton variant="primary" onClick={handleApply} className="mt-3">
        Apply
      </ApplyButton>
      <Button variant="secondary" onClick={handleClear} className="mt-3">
        Clear
      </Button>
    </div>
  );
};

export default TagsFilter;
