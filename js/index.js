$(document).ready(function () {
  /**** Menu ****/
  $(".btn-opener").click(function () {
    $(".nav-slide").animate({ width: "200px", padding: "32px" }, 300);
    $(this).animate({ left: "200px" }, 300);
  });

  $(".btn-closer").click(function () {
    $(".nav-slide").animate({ width: "0", padding: "0" }, 300);
    $(".btn-opener").animate({ left: "0" }, 300);
  });
  /**** Detailes ****/
  $(".detail-title").click(function () {
    const clickedDetailText = $(this).siblings(".detail-text");

    $(".detail-text").not(clickedDetailText).slideUp(300);

    clickedDetailText.slideToggle(300);
  });

  /**** Duration ****/

  const eventDate = new Date("2023-10-25T03:21:00").getTime();

  // Update the countdown every second
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    $(".days").html(`${days}d`);
    $(".hours").html(`${hours}h`);
    $(".minutes").html(`${minutes}m`);
    $(".seconds").html(`${seconds}s`);

    // If the countdown is over, display a message
    if (timeLeft <= 0) {
      clearInterval(countdown);
      $(".time").html(`<i class="fa fa-check" aria-hidden="true"></i>`);
      $(".event-status").removeClass("d-none");
    }
  }, 1000);

  /**** Msg Counter ****/

  $("textarea").on("input", function () {
    const inputValue = $(this).val();
    const charCount = inputValue.length;
    $(this).val(inputValue.substring(0, 100));
    const remainingChars = 100 - charCount;

    $(".counter").text(remainingChars);

    if (remainingChars < 0) {
      $(".counter").text("Your reach the limits No");
    }
  });
  ``;
});
