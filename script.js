$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    body.removeClass('view-2D opening')
        .addClass("view-3D set-none") // ⬅️ Đặt trạng thái mặc định là "không hiển thị"
        .delay(2000)
        .queue(function() {
          $(this).removeClass('hide-UI');
          $(this).dequeue();
        });
  };


  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

$(".set-view input").click(function() {
  body.toggleClass("view-3D view-2D");
});

$(".set-zoom input").click(function() {
  body.toggleClass("zoom-large zoom-close");
});

$(".set-none").click(function() {
  body.removeClass("set-speed set-size set-distance").addClass("set-none");
  setView("scale-stretched");
});

$(".set-speed").click(function() {
  body.removeClass("set-none");
  setView("scale-stretched set-speed");
});

$(".set-size").click(function() {
  body.removeClass("set-none");
  setView("scale-s set-size");
});

$(".set-distance").click(function() {
  body.removeClass("set-none");
  setView("scale-d set-distance");
});


  init();

});

// Button xoay
document.getElementById("rotate-toggle").addEventListener("click", async () => {
  if (screen.orientation && screen.orientation.lock) {
    try {
      const current = screen.orientation.type;
      if (current.startsWith("portrait")) {
        await screen.orientation.lock("landscape");
      } else {
        await screen.orientation.lock("portrait");
      }
    } catch (err) {
      alert("Thiết bị không hỗ trợ thay đổi hướng xoay tự động.");
    }
  } else {
    alert("Trình duyệt không hỗ trợ API xoay màn hình.");
  }
});
