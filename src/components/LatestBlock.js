import react from 'react';
import { Box, Typography } from '@mui/material';
import AvTimerIcon from '@mui/icons-material/AvTimer';

const LatestBlock = ({blockNumber})=>{
    return (
        <Box m={1} p={1} gap={1} display="flex" alignItems="center">
          <AvTimerIcon fontSize="large" />
          <Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                Latest Block
            </Typography>
            <Typography variant="h5">
                {blockNumber}
            </Typography>
          </Box>
        </Box>
    )
}

export default LatestBlock
