const Background =
  "https://images.unsplash.com/photo-1561394104-be378db5659c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

export const body = {
  backgroundImage: `url(${Background})`,
  opacity: "0.9",
  margin: "0",
  width: "100%",
  minHeight: "937px",
  backgroundPosition: "0 0",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Lexend Deca"
};

export const page = {
  background: "#ffff",
  width: "65em",
  margin: "3em auto ",
  borderRadius: "5px",
  boxSizing: "border-box",
  display: "grid",
  gridTemplateRows: "10em auto"
};

export const upper = {
  background: "#6dafe8",
  borderRadius: "5px 5px 0 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "23px"
};

export const lower = {
  display: "grid",
  gridTemplateRows: "3em auto"
};

export const head = {
  background: "#f0f0f0",
  borderBottom: "2px solid #b6bbbf",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: 'wrap',
  minHeight: '100%'
};

export const input = {
  minHeight: "20px",
  border: "2px solid #618bad"
};

export const button = {
  background: "#618bad",
  border: "0",
  borderRadius: "3px",
  fontSize: "16px",
  minHeight: "28px",
  marginLeft: "2em",
  color: "#f0f0f0"
};

export const select = {
  minHeight: "20px",
  marginLeft: "5em",
  fontSize: "15px"
};

export const main = {
    display: 'flex',
    justifyContent: "space-evenly",
    flexWrap: 'wrap',
};

export const block = {
  marginTop: "3em",
  background: "#f0f0f0",
  width: '12em',
  height: '15em',
  borderRadius: '3px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: 'column',
  fontSize: '18px'
};

export const cloudBlue = {
  width: '9em'
}