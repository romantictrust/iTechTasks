import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    direction: 'row',
    justify: 'space-evenly',
    alignItems: 'center',
    marginTop: '4em',
  },
  tabPannelRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  operationBoxWrap: {
    direction: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  operationsBox: {
    marginTop: '2em',
    marginBottom: '2em',
  },
}));
export default useStyles;
