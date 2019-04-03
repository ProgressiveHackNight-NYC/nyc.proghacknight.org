function showMailchimpSubscribePopUp() {
  window.dojoRequire(["mojo/signup-forms/Loader"], function (L) {
    L.start({
      "baseUrl": "mc.us16.list-manage.com",
      "uuid": "597c1a32f8812c62dfc1126f5",
      "lid": "90e62cddff",
      "uniqueMethods": true
    })
  })
  document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}