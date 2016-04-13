var portfolioView = {};

portfolioView.handleNavTabs = function(){
  $('nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    var $selectedTab = $(this).attr('data-content');
    $('#' + $selectedTab).show();
  });
  $('nav .tab:nth-of-type(2)').click();
};

portfolioView.populateFilter = function(){
  $('div[data-category]').each(function(){
    if(!$(this).hasClass('template')){
      var val = $(this).attr('data-category');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag); //now our data is dynamic. ER
      }
    }
  });
};

portfolioView.handleCategoryFilter = function(){
  $('#category-filter').on('change', function(){
    if ($(this).val()){
      $('div[data-category]').hide();
      var $selectedCategory = $('div[data-category=' + $(this).val() + ']');
      $selectedCategory.show();
    } else {
      $('div[data-category]').show();
    }
  });
};

$(document).ready(function(){
  portfolioView.handleNavTabs();
  portfolioView.populateFilter();
  portfolioView.handleCategoryFilter();
});
