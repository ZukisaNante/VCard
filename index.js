import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // my first external css
  'header': {
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 600 }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'h2': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'p': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'container': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 120 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  'footer': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 70 }],
    'backgroundColor': 'rgb(85, 231, 219)',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'button': {
    'position': 'relative',
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  // button fade-in
  'button': {
    'backgroundColor': '#f4511e',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 32 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }],
    'opacity': '0.6',
    'transition': '0.3s'
  },
  'button:hover': {
    'opacity': '1'
  },
  // shake image
  'img:hover': {
    'animation': 'shake 0.5s',
    'animationIterationCount': 'infinite'
  },
  // avatar
  'avatar': {
    'verticalAlign': 'middle',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '50%'
  },
  // ---- base ----
  // ---- stats.js ----
  'count-particles': {
    'background': '#000022',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 48 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'color': 'rgba(15, 230, 183, 0.973)',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'textAlign': 'left',
    'textIndent': '4px',
    'lineHeight': [{ 'unit': 'px', 'value': 14 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 2 }],
    // font-family: Helvetica, Arial, sans-serif;
    'fontWeight': 'bold'
  },
  'js-count-particles': {
    'fontSize': [{ 'unit': 'em', 'value': 1.1 }]
  },
  '#stats': {
    'WebkitUserSelect': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'count-particles': {
    'WebkitUserSelect': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  '#stats': {
    'borderRadius': '3px 3px 0 0',
    'overflow': 'hidden'
  },
  'count-particles': {
    'borderRadius': '0 0 3px 3px'
  },
  // ---- particles.js container ----
  '#particles-js': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': 'lightseagreen',
    'backgroundImage': 'url("")',
    'backgroundSize': 'cover',
    'backgroundPosition': '50% 50%',
    'backgroundRepeat': 'no-repeat'
  }
});
