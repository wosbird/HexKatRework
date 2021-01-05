$('body').scrollspy({ target: '#casescroll' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

