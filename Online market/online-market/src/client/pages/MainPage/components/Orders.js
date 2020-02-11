import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { TableFooter } from "@material-ui/core";
import useStyles from "../styles/TabPanelStyle";
import Title from "../../../shared/components/Title";
import TablePaginationActions from "../../../shared/components/Pagination";
import Loader from "../../../shared/components/Loader";

export default function Orders(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { userData } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <div className={classes.tableWrapper}>
          <Title>Recent Orders</Title>
          {userData.orders[0] ? (
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Operation</TableCell>
                  <TableCell>Resource</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.orders
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow key={row.index}>
                      <TableCell>{row.index}</TableCell>
                      <TableCell>{row.flag}</TableCell>
                      <TableCell>{row.material}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={3}
                    count={userData.orders.length}
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
          ) : (
            <div>
              <Loader />
              <div>Waiting for making orders..</div>
            </div>
          )}
        </div>
      </Paper>
    </Grid>
  );
}
