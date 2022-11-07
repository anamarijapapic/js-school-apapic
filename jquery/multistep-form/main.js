// Multistep form 01
(function () {
    $(document).ready(function() {
        $('.selectPropertyType01').select2();
        $('.selectPropertySize01').select2();
    });

    $(document).ready(function() {
        let propertySizeHtml = $('.selectPropertySize01').html();

        $('.selectPropertyType01').change(function() {
            let selectedPropertyType = $('[name=propertyType] :selected').text();
            let propertySize = $('.selectPropertySize01');

            propertySize.html(propertySizeHtml);

            let optGroup = $('optgroup[label="' + selectedPropertyType + '"]').html();

            propertySize.html(optGroup);
        });
    });

    $(document).ready(function() {
        let nextSteps = $(this).find('.form-step-next');

        nextSteps.each(function() {
            let stepFormField = $(this).find('.form-control');
            let stepImage = $(this).find('.form-step-image');
            let stepNumber = $(this).find('.form-step-number');

            let selectPrev = $(this).prevAll().children().find('select');

            selectPrev.change(function() {
                selectPrev.each(function() {
                    if ($(this).val() == '') {
                        stepFormField.prop("disabled", true);
                        stepImage.css('display', 'none');
                        stepNumber.css('color', '#808080');
                    } else {
                        stepFormField.prop("disabled", false);
                        stepImage.css('display', 'initial');
                        stepNumber.css('color', '#ff5f15');
                    }
                });
            });
        });
    });

    function verifyZipCode() {
        let zipCode = $('#propertyZip').val();
        if (zipCode.length > 4 && zipCode.length < 13 && zipCode.match(/^\d+$/)) {
            return true;
        }
        return false;
    }

    function verifyForm() {
        if ($('.selectPropertyType01').val() != '' && $('.selectPropertySize01').val() != '' && verifyZipCode()) {
            return true;
        } 
        return false;
    }

    function updateFormStatus() {
        if (verifyForm()) {
            $('.submit').removeClass('disabled');
        } 
        else {
            $('.submit').addClass('disabled');
        }
    }

    $('.selectPropertyType01').change(updateFormStatus);
    $('.selectPropertySize01').change(updateFormStatus);
    $('#propertyZip').change(updateFormStatus);
})();

// Multistep form 02
(function () {
    $(document).ready(function() {
        $('.selectPropertyType02').select2();
        $('.selectPropertySize02').select2();
    });
})();