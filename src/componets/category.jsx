import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, GridItem,Grid,Image } from "@chakra-ui/react";
function Category_api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(
        "http://95.111.202.157:8001/api/getAllCategory"
      );
      console.log(response);

      setPosts(response.data);
    };

    loadPost();
  }, []);

  return (
    <>
      <div>
        <Heading>Category</Heading>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} m={10}>
          {posts.slice(2,8).map((image) => (
            <GridItem w="100%" h="10" key={image._id} m={10}>
              <Image
                w="100px"
                src={"http://95.111.202.157:8001/" + image.image}
              />
              {image.categoryName}
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Category_api;
