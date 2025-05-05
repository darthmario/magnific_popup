(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.magnific_popup = {
    attach(context, settings) {
      // Gallery.
      $(
        once(
          'mfp-processed',
          '.mfp-all-items, .mfp-first-item, .mfp-random-item',
          context,
        ),
      ).each(function () {
        const verticalFit = !!(
          $(this).attr('data-vertical-fit') === undefined ||
          $(this).attr('data-vertical-fit') === 'true'
        );
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true,
          },
          image: {
            verticalFit,
            titleSrc(item) {
              return item.img.attr('alt') || '';
            },
          },
        });
      });

      // Separate items.
      $(once('mfp-processed', '.mfp-separate-items', context)).each(
        function () {
          const verticalFit = !!(
            $(this).attr('data-vertical-fit') === undefined ||
            $(this).attr('data-vertical-fit') === 'true'
          );
          $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            image: {
              verticalFit,
              titleSrc(item) {
                return item.img.attr('alt') || '';
              },
            },
          });
        },
      );
    },
  };
})(jQuery, Drupal, drupalSettings);
