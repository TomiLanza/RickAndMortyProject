$("input").click(function(){ 
   renderCards();
});


function renderCards() {
   $('.container-card').hide();
   let classesToRender = '.container-card';

   $('input:checked').each(function(){
      classesToRender = classesToRender + '.' + $(this).attr('id')
   })

   $(classesToRender).show();
}

renderCards();

function showHideDiv(name){
   $('.hdn-'+name).toggle()
   $('.btn-'+name).toggle()
}

