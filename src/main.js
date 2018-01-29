// promisse corrige bug ie
import 'es6-promise/auto'  // promisse

if (!Object.values) {
  Object.prototype.values = function(object) {
    var values = [];
    var keys = Object.keys(object);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      values.push(object[k]);
    }
    return values;
  }
}

import Vue from 'vue'        // vue

import App from '@/App.vue'  // App

import store from '@/vuex'    // Vuex

import VueResource from 'vue-resource' // get $http

import VueMq from 'vue-mq' // media query vue

import VCalendar from 'v-calendar'

Vue.use(VueResource)

Vue.use(VueMq, { breakpoints: { s: 500, m: 800, l: 1200, xl: Infinity }})

Vue.use(VCalendar, 
 {
  componentPrefix: 'v',
  firstDayOfWeek: 1, // Sunday is the default
  navVisibility: 'focus',
  titlePosition: 'center',
  titleTransition: 'slide-h', // Horizontal slide
  weeksTransition: 'slide-h',
  dateFormatter: d => d.toLocaleDateString(),
  dateParser: s => new Date(Date.parse(s)),
  datePickerInputClass: '',
  datePickerInputStyle: null,
  datePickerInputPlaceholder: '',
  datePickerSelectColor: '#8fbc34',
  datePickerDragColor: '#b4d85d', // Only used for drag mode
  datePickerShowCaps: true, // Only used for drag mode
  datePickerShowPopover: true,
  popoverExpanded: false,
  popoverDirection: 'bottom',
  popoverAlign: 'left',
  popoverVisibility: 'hover',
  popoverContentOffset: '10px',
  maxSwipeTime: 300, // ms
  minHorizontalSwipeDistance: 60, // px
  maxVerticalSwipeDistance: 80, // px
  maxTapTolerance: 0, // ms
  maxTapDuration: 200, // ms
  highlight: {
    animated: true,
    height: '2.8rem',
    borderWidth: '0',
    borderStyle: 'solid',
    borderRadius: '290486px',
    opacity: 1,
  },
  highlightCaps: {
    animated: true,
    height: '2.8rem',
    borderWidth: '0',
    borderStyle: 'solid',
    borderRadius: '290486px',
    opacity: 1,
  },
  dot: {
    diameter: '7px',
    backgroundColor: '#66b3cc',
    borderWidth: '0',
    borderStyle: 'solid',
    borderRadius: '50%',
    opacity: 1,
  },
  bar: {
    height: '3px',
    backgroundColor: '#66b3cc',
    borderWidth: '0',
    borderStyle: 'solid',
    opacity: 1,
  },
  themeStyles: {
    wrapper: { 
      backgroundColor: '#fff', 
      border: '0px solid' 
    },
    header: { 
      borderWidth: '1px 0 0 0', 
      borderStyle: 'solid', 
      borderColor: '#e2e2e2' 
    },
    headerTitle: { 
      fontFamily: 'Heebo, sans-serif', 
      color: '#686868', 
      fontSize: '1.28em' 
    },
    weekdays: { 
      fontFamily: 'Heebo, sans-serif', 
      padding: '.2em 0 0.8em', 
      color: '#c1c1c1', 
      fontSize: '1.25em', 
      textTransform: 'uppercase', 
      borderWidth: '0 0 1px 0', 
      borderStyle: 'solid', 
      borderColor: '#e2e2e2' 
    },
    dayContent: { 
      fontFamily: 'Heebo, sans-serif', 
      fontSize: '1.11em',
      lineHeight: '1.4em'
    },
    dayCellNotInMonth: { opacity: 0.4 }
  },
})

// instance
const app = new Vue({
  // store
  store,

  // render: h => h(App)
  render: function (createElement) {
    return createElement(App);
  }
}).$mount('#app')


