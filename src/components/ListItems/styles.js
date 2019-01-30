const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300
  },
  addBotton: {
    margin: 0,
    padding: 20,
    borderRadius: 0,
    width: '100%',
    boxShadow: 'none',
    borderBottomLeftRadius: 8
  },
  avatar: {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent'
  },
  list: {
    height: 550,
    maxHeight: 550,
    paddingBottom: 0,
    borderTop: '1px solid rgba(0,0,0,0.12)',
    overflowY: 'auto'
  },
  listItem: {
    cursor: 'pointer'
  },
  listItemText: {
    wordWrap: 'break-word'
  },
  li: {
    height: 8
  },
  searchBox: {
    padding: 8,
    display: 'flex',
    flexDirection: 'column'
  },
  searchBoxTextField: {
    marginLeft: 20,
    paddingRight: 20,
    width: 'calc(100% - 20px)'
  }
});

export default styles;