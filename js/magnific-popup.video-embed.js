/* eslint-disable */
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.magnific_popup_video_embed_field = {
    attach(context) {
      $(once('mfp-processed', '.mfp-video-embed-first-item, .mfp-video-embed-all-items', context)).each(function () {
        const Gallery_Items = [];

        $(this).find('.mfp-video-embed-popup').each(function () {
          Gallery_Items.push({
            src:
            `<div class="mfp-embedded-video-popup">${
              $(this).data('mfp-video-embed')
            }</div>`,
          });
        });

        $(this).magnificPopup({
          items: Gallery_Items,
          gallery: {
            enabled: true,
          },
          type: 'inline',
        });
      });

      $('.mfp-video-embed-separate-items', context).each(() => {
        $(once('mfp-processed', '.mfp-video-embed-popup', context)).click(function (e) {
          // Stop linking to video URL instead of showing popup.
          // See video-embed-field.clorox.js in video_embed_field for more.
          e.preventDefault();

          $.magnificPopup.open({
            items: {
              src:
              `<div class="mfp-embedded-video-popup">${
                $(this).data('mfp-video-embed')
              }</div>`,
            },
            type: 'inline',
          });
        });
      });
    },
  };
}(jQuery, Drupal, drupalSettings));
