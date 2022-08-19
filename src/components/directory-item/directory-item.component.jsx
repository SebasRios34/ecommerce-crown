import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  //destructoring the category obtain from props(directory.component.jsx)
  const { imageUrl, title, route } = category;

  //usign the hook, useNavigate to help us navigate to the specific route of the category
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  //here imageUrl is passed on to directory-item.styles.jsx, so it can be used in the stlyling
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
