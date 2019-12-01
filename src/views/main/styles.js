import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { fontWeight } from "@material-ui/system";



const RadioGroupCustom = withStyles({
  root: {
    margin: '20px 0px',
  }
})(RadioGroup);

const FormControlLabelCustom = withStyles({
  root: {
    background: '#FFF',
    color: 'white',
    height: 36,
    width: 120,
    padding: '0px 15px',
    boxShadow: 'none',
    marginRight: 0,
    borderTop: '1px solid #4480C5',
    borderBottom: '1px solid #4480C5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '&:first-child': {
      borderRadius: '21px 0px 0px 21px',
      borderLeft: '1px solid #4480C5',
    },
    '&:last-child': {
      borderRadius: '0px 21px 21px 0px',
      borderRight: '1px solid #4480C5',
    },

  },
  label: {
    color: '#16437E',
    fontSize: 16,
    '& > span': {
      color: '#FFF',
    }
  }
})(FormControlLabel);

const RadioCustom = withStyles({
  root: {
    width: '18px',
    height: '18px',
    padding: 0,
    marginRight: 5,
    alignItems: 'flex-end',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
    '& span > div > svg': {
      width: 19,
      height: 19,
    }
  },
  checked: {
    '& input + div':{
      color: '#FFF',
    },
  },
})(Radio);

const styleClass = () => ({
  radioPeriod: {
    zIndex: 1,
    background: '#4480C5',
    borderRadius: '21px !important',
    '& > span': {
      fontWeight: 'bold',
      color: '#FFF !important'
    }
  },
  displayFlexElement: {
    display: 'flex',
  },
  centerElement: {
    display: 'flex',
    justifyContent: 'center',
  },
  svgCustom: {
    '& rect': {
      fill: '#000'
    }
  }
});

export {FormControlLabelCustom, RadioCustom, RadioGroupCustom, styleClass};


