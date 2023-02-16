import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "#fbc531",
    trainsition: { duration: 10 },
  },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        dragConstraints={{
          top: -50,
          bottom: 50,
          left: -50,
          right: 50,
        }}
        variants={boxVars}
        whileHover="hover"
        whileDrag="drag"
        whileTap="tap"
      ></Box>
    </Wrapper>
  );
}

export default App;
