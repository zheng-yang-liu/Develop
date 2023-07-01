function openDialog() {
  var dialog = document.getElementById('dog')
  dialog.showModal()
  document.body.style.overflow = 'hidden' // 禁止滑动
}

function closeDialog() {
  var dialog = document.getElementById('dog')
  dialog.close()
  document.body.style.overflow = '' // 恢复滑动
}
