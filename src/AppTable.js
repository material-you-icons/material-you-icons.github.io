import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { apps } from "./applist";

export default function AppTable({darkTheme, sx}) {
    return (
        <TableContainer sx={sx}>
          <Table>
            <TableBody>
            {apps.map((app) => (
              <TableRow
                key={app}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                    {app.playstore ? 
                        <Link href={`https://play.google.com/store/apps/details?id=${app.playstore}`} underline='none' target='_blank'>
                            <Typography variant='h6'>{app.name}</Typography>
                        </Link>
                        : <Typography variant='h6'>{app.name}</Typography>
                    }
                </TableCell>
                <TableCell sx={{width:'20%'}}><Box component={'img'} className='app-icon' src={`/icons/color/${app.file}.png`}/></TableCell>
                <TableCell sx={{width:'20%'}}><Box component={'img'} className='app-icon' src={`/icons/${darkTheme ? 'dark' : 'light'}/${app.file}.png`}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
    );
}