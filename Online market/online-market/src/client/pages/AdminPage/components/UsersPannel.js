import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { Grid } from "@material-ui/core";
import { TableFooter } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "../styles/AdminPageStyle";
import Title from "../../../basicComponents/components/Title";
import TablePaginationActions from "../../../basicComponents/components/Pagination";
import BlockUser from '../functions/BlockUser';

const userList = [
  { index: 0, id: "fewfwevew", email: "fewfwevew@usef.com" },
  { index: 1, id: "grt", email: "grt@usef.com" }
];

export default function Activities(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Grid item className={classes.operationsBox}>
      <Paper className={fixedHeightPaper}>
        <Title>Users Pannel</Title>
        <div className={classes.tableWrapper}>
          <Title>Recent Orders</Title>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{row.index}</TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="right">
                      <Button
                        color="secondary"
                        variant="contained"
                        size="small"
                        onClick={()=>{BlockUser(row.id)}}
                      >
                        Block
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={userList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    </Grid>
  );
}
