$(function() {
  $(window).on({
    'load': function() {
      console.log('loadイベントが発生しました');
    },
    'scroll': () => {
      console.log('scrollイベントが発生しました');
    }
  });
});