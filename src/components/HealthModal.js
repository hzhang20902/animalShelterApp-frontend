import { Typography, Container, Modal, Box, Button } from "@mui/material";
import { React, useState } from "react";

export default function HealthModal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h3">Contagion Alert!</Typography>
          <Typography>
            Check the health status of the animal to determine handling
            protocols and follow best practices as laid out in the volunteer
            handbook.
          </Typography>
          <Button onClick={handleClose}>I will check</Button>
        </Box>
      </Modal>
    </Container>
  );
}
