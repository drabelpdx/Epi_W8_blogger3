Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function() {
      alert("it's dracula");
    },

    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function(){
      this.set('isPictureShowing', false);
    }
  }
});
