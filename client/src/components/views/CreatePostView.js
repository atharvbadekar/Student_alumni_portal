import { Container, Card } from "@mui/material";
import React from "react";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostEditor from "../PostEditor";
import Sidebar from "../Sidebar";

const CreatePostView = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#FFE0B2", // Light orange
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          <Card
            sx={{
              backgroundColor: "#E0F7FA", // Light cyan
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <PostEditor />
          </Card>
        }
        right={
          <Card
            sx={{
              backgroundColor: "#C5E1A5", // Light green
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <Sidebar />
          </Card>
        }
        sx={{
          padding: "20px",
        }}
      />
    </Container>
  );
};

export default CreatePostView;
