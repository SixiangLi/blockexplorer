import alchemy from './alchemy';
import { useEffect, useState, useMemo } from 'react';
import { Box, Container, Card, CardHeader, CardContent, Typography } from '@mui/material';

import LatestBlock from './components/LatestBlock';
import BlockItem from './components/BlockItem';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  const LatestBlocks = useMemo(()=>{
    const blocks = []
    for(let i=0; i<blockNumber && i< 6; i++){
      blocks.push(blockNumber - i)
    }
    return (<>{
      blocks.map((number)=>{
        return <BlockItem key={number} number={number} />
      })
    }</>)
  }, [blockNumber])

  return (
    <Box mt={3}>
      <Container>
        <Card>
          <LatestBlock blockNumber={blockNumber} />
        </Card>
        <Box mt={3}>
          <Card>
            <CardContent>
              <Typography variant="h4">Latest Blocks</Typography>
              {LatestBlocks}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default App;
