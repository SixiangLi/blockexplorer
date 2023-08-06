import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import alchemy from '../alchemy';

const BlockItem = ({
  number,
})=>{
  const [blockInfo, setBlockInfo] = useState();

  useEffect(() => {
    async function getBlockInfo() {
      const info = await alchemy.core.getBlock(number)
      console.log(info)
      setBlockInfo(info);
    }

    getBlockInfo();
  }, []);
  
  return (
    <Box m={1} p={1} gap={1} display="flex" alignItems="center">
      <Box p={1}>
        <ViewInArOutlinedIcon fontSize="large" />
      </Box>
      <Box>
        <Typography>
            {number}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
            {blockInfo ? Math.round((new Date - (new Date(blockInfo.timestamp*1000)))/1000) : "..."} secs ago
        </Typography>
      </Box>
      <Box>
        <Typography>
          Fee Recipient: {blockInfo ? blockInfo.miner : "..."}
        </Typography>
        <Typography sx={{ fontSize: 12 }}>
            {blockInfo ? blockInfo.transactions.length : "..."} txns
        </Typography>
      </Box>
    </Box>
  )
}

export default BlockItem
