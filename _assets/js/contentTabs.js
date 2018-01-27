(function($){

  $.fn.contentTabs = function() {

        var $this = this;
        onInit();
        onHeaderClick();



        /**
         * Function onInit
         * This function does some actions on initializing
         * It checks how many tab-header and tab-content items there are.
         * It adds a class of active to the first tab-header and tab-content.
        **/
        function onInit(){

          var tabHeaderAmount = $this.children().children(".tab-header").length;
          console.log(tabHeaderAmount);

          var tabContentAmount =  $this.children().children(".tab-content").length;
          console.log(tabContentAmount);

          if(!(tabHeaderAmount === tabContentAmount)){
            console.log("You have " + tabHeaderAmount + " tab-header items and " + tabContentAmount + " tab-content items. Make sure there is an equal amount of both.")
          }

          $this.children().children(":first-of-type").addClass("active");

          $(".contentTabs--content").children().each(function(i){
            $(this).attr("data-slide", (i+1));
          });
        }


        /**
         * Function onHeaderClick
         * This function is called when tab-header is clicked;
        **/
        function onHeaderClick(){

          $(".tab-header").on("click", function(){
      			var index = $(this).index() + 1;
      			var selectedTab = $('.contentTabs--content').find("[data-slide='" + index + "']");

            console.log(index)
            //$('.tab-header').removeClass('active');
            $(this).addClass("active")
      			$(this).toggleClass('active');

      			$(selectedTab).addClass('active');
          });

      }

  };

}(jQuery));
