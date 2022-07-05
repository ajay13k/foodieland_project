import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, GridItem, Grid, Image, Text } from "@chakra-ui/react";
function Recipes_api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(
        "http://95.111.202.157:8001/api/v1/getAllRecipes"
      );
      console.log("ajay", response);

      setPosts(response.data);
    };

    loadPost();
  }, []);

  return (
    <>
      <div>
        <Text align="center">
          <Heading>Simple and tasty recipes</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Hic nihil obcaecati eius porro neque odit nisi
            , necessitatibus excepturi consequuntur? Ex suscipit facere</Text>
        </Text>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} m={10}>
          {posts.map((img) => (
            <GridItem w="100%" h="10" key={img._id} m={10}>
              <Image
                w="100px"
                src={"http://95.111.202.157:8001/" + img.recipeId.image}
              />
              <Text width="250px" height="6px">
                {img.recipeId.description}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Recipes_api;
