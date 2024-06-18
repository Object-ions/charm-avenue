import React, { useEffect, useState } from 'react';
import { useGetTagsQuery } from '../slices/productsApiSlice';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const TagsFilter = () => {
  const navigate = useNavigate();
  const { tag: urlTag } = useParams();
  const [selectedTag, setSelectedTag] = useState(urlTag || '');
  const { data: tags, isLoading, error } = useGetTagsQuery();

  useEffect(() => {
    if (urlTag) {
      setSelectedTag(urlTag);
    }
  }, [urlTag]);

  const handleTagChange = (e) => {
    const newTag = e.target.value;
    setSelectedTag(newTag);
    if (newTag) {
      navigate(`/products/tags/${newTag}`);
    } else {
      navigate(`/products`);
    }
  };

  return (
    <Form.Group controlId="tagsFilter">
      <Form.Label>Filter by Tag</Form.Label>
      <Form.Control as="select" value={selectedTag} onChange={handleTagChange}>
        <option value="">All</option>
        {isLoading ? (
          <option>Loading...</option>
        ) : error ? (
          <option>Error loading tags</option>
        ) : (
          tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))
        )}
      </Form.Control>
    </Form.Group>
  );
};

export default TagsFilter;
